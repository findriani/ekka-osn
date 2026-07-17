/* Converts banksoal/*.md into public/banks/*.json.
 *
 *   npm run banks
 *
 * Drop a new .md into banksoal/, run this, and the bank appears on the site.
 * Nothing else needs editing.
 *
 * Expected shape of a source file:
 *
 *   # <title>
 *   <optional intro paragraph>
 *   ## Petunjuk jawaban
 *   <answer-format rules for the whole set>
 *   ## Soal 1 — <name>
 *   <question text, optionally with "- **A.** ..." choices>
 *   **Jawaban:** `_____`
 *   ...
 *   # Kunci jawaban
 *   ## Soal 1
 *   **Jawaban: 42**
 *   <worked solution>
 *   # Catatan pengajar        <- teacher-only, never shipped
 *
 * The build fails loudly rather than shipping a bank with a missing or
 * unparseable answer: a silently wrong answer key is worse than no bank.
 */

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(here, '../../banksoal');
const OUT = path.resolve(here, '../public/banks');

const CHECK_ONLY = process.argv.includes('--check');

/* These two early Python sets stay in banksoal as material to revise later,
 * but should not be published to the student-facing bank yet. */
const UNPUBLISHED_BANKS = new Set([
  'meeting_07_latihan_python_diagnostik_01',
  'python_09b_campuran_tulis_01',
  'python_01c_program_dasar_01'
]);

const problems = [];
const fail = (file, msg) => problems.push(`${file}: ${msg}`);

/* --- Section helpers ---------------------------------------------------- */

const stripRules = s => s.replace(/^\s*---\s*$/gm, '').trim();

/* <pre> blocks in a bank are raw HTML, so their Python is written escaped
 * ("0 &lt;= n"). Everything downstream — the textarea, the test runner, the
 * build-time check — needs the real source back. */
const unescapeHtml = s => s
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'")
  .replace(/&amp;/g, '&');   // last: "&amp;lt;" must survive as "&lt;"

/* Pulls out <pre class="x">…</pre> and returns { code, rest }. */
function extractPre(body, cls) {
  const re = new RegExp(`<pre class="${cls}">([\\s\\S]*?)</pre>`, 'i');
  const m = body.match(re);
  if (!m) return { code: null, rest: body };
  return { code: unescapeHtml(m[1]), rest: body.replace(re, '') };
}

/* Split on "## Soal N — title" and keep the number + title with each chunk. */
function splitSoal(text) {
  const re = /^##\s+Soal\s+(\d+)\s*(?:[—–-]\s*(.*))?$/gm;
  const found = [];
  let m;
  while ((m = re.exec(text)) !== null) {
    found.push({ n: Number(m[1]), name: (m[2] ?? '').trim(), start: m.index, headEnd: re.lastIndex });
  }
  return found.map((f, i) => ({
    n: f.n,
    name: f.name,
    body: text.slice(f.headEnd, i + 1 < found.length ? found[i + 1].start : undefined)
  }));
}

/* --- Question parsing --------------------------------------------------- */

const CHOICE_RE = /^-\s+\*\*([A-E])\.\*\*\s+(.*)$/gm;

function extractChoices(body) {
  const choices = [];
  let m;
  CHOICE_RE.lastIndex = 0;
  while ((m = CHOICE_RE.exec(body)) !== null) choices.push({ key: m[1], text: m[2].trim() });
  if (!choices.length) return null;

  // Choices must be A, B, C… in order for a letter answer to map to an index.
  const expected = choices.map((_, i) => String.fromCharCode(65 + i));
  if (choices.some((c, i) => c.key !== expected[i])) return null;

  return { choices, prompt: body.replace(CHOICE_RE, '').trim() };
}

/* The per-question format line, e.g. "*Tuliskan jawaban sebagai bilangan bulat.*"
 * Pulled out of the prompt so it can be shown against the input box: these banks
 * treat a right value in the wrong format as wrong, so it must not be missable. */
const HINT_RE = /^\*(Tuliskan jawaban[^*]*|Format Pengisian[^*]*)\*$/m;

function formatHint(body) {
  const m = body.match(HINT_RE);
  return m ? m[1].replace(/\s+/g, ' ').trim() : null;
}

function parseQuestion(file, soal, key) {
  // Everything before the answer placeholder is the prompt.
  let body = soal.body.split(/^\*\*Jawaban:\*\*\s*`_+`$/m)[0];
  body = stripRules(body);

  if (!body) fail(file, `Soal ${soal.n} has an empty prompt`);

  const id = `S${soal.n}`;
  const hint = formatHint(body);
  if (hint) body = stripRules(body.replace(HINT_RE, ''));

  // "**Jawaban: kode**" marks a question she answers by writing Python.
  if (key.answer === 'kode') return parseCode(file, soal, key, id, hint, body);

  const uji = extractPre(body, 'uji');
  if (uji.code !== null) {
    fail(file, `Soal ${soal.n} has a <pre class="uji"> test block, but its answer key does not say "**Jawaban: kode**"`);
    return null;
  }

  const mc = extractChoices(body);

  if (mc) {
    const idx = mc.choices.findIndex(c => c.key === key.answer);
    if (idx === -1) {
      fail(file, `Soal ${soal.n}: answer "${key.answer}" is not one of ${mc.choices.map(c => c.key).join('/')}`);
      return null;
    }
    return {
      id, name: soal.name, type: 'mc',
      prompt: mc.prompt,
      ...(hint ? { hint } : {}),
      choices: mc.choices.map(c => c.text),
      answer: idx,
      solution: key.solution
    };
  }

  // Not multiple choice, so a single fill-in blank.
  const num = parseNumber(key.answer);
  const blank = num !== null
    ? { label: 'Jawaban', type: 'number', answer: num, tolerance: 1e-9 }
    : { label: 'Jawaban', type: 'text', answer: [key.answer] };

  if (num === null && /^[A-E]$/.test(key.answer)) {
    fail(file, `Soal ${soal.n}: answer "${key.answer}" looks like a choice letter, but no A./B./C. options were found in the prompt`);
    return null;
  }

  return {
    id, name: soal.name, type: 'fill',
    prompt: body,
    ...(hint ? { hint } : {}),
    blanks: [blank],
    solution: key.solution
  };
}

/* --- Code questions ----------------------------------------------------- */

/* Reference solutions to run before anything is written. A code question whose
 * own key fails its own tests is the same class of bug as a wrong number in the
 * answer key, and gets the same treatment: the build dies. */
const verifyJobs = [];

/*   ## Soal 1 — …
 *   <prompt>
 *   <pre class="starter">def f(x):
 *       return None</pre>
 *   <pre class="uji">f(2) == 4
 *   f(0) == 0</pre>
 *   **Jawaban:** `_____`
 *
 *   ## Soal 1                      (in # Kunci jawaban)
 *   **Jawaban: kode**
 *   <pre class="kunci">def f(x):
 *       return x * 2</pre>
 *   <explanation>
 */
function parseCode(file, soal, key, id, hint, body) {
  const s = extractPre(body, 'starter');
  const u = extractPre(s.rest, 'uji');
  const prompt = stripRules(u.rest);

  if (s.code === null) {
    fail(file, `Soal ${soal.n}: code question has no <pre class="starter"> block ` +
               `(she needs the function signature to write against)`);
    return null;
  }
  if (u.code === null) {
    fail(file, `Soal ${soal.n}: code question has no <pre class="uji"> block`);
    return null;
  }

  // One test per line. Blank lines and #comments are for readability only.
  const tests = u.code.split('\n')
    .map(t => t.trim())
    .filter(t => t && !t.startsWith('#'));

  if (!tests.length) {
    fail(file, `Soal ${soal.n}: <pre class="uji"> has no test lines`);
    return null;
  }

  const kunci = extractPre(key.solution, 'kunci');
  if (kunci.code === null) {
    fail(file, `Soal ${soal.n}: answer key has no <pre class="kunci"> reference solution, ` +
               `so the build cannot check that the tests are passable`);
    return null;
  }

  verifyJobs.push({ file, n: soal.n, solution: kunci.code, tests });

  return {
    id, name: soal.name, type: 'code',
    prompt,
    ...(hint ? { hint } : {}),
    starter: s.code.trim() + '\n',
    tests,
    solution: key.solution   // the <pre class="kunci"> stays: she should see it after grading
  };
}

/* Locate a usable CPython. The drills are Python; a machine that cannot build
 * them cannot check them either, and guessing is worse than stopping. */
function findPython() {
  for (const exe of ['python', 'python3', 'py']) {
    const r = spawnSync(exe, ['-c', 'print(1)'], { encoding: 'utf8' });
    if (!r.error && r.status === 0) return exe;
  }
  return null;
}

function verifyAll() {
  if (!verifyJobs.length) return;

  const python = findPython();
  if (!python) {
    problems.push(
      'Python was not found on PATH, so the reference solutions for the code ' +
      'questions could not be checked. Install Python or remove the code banks.');
    return;
  }

  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'osnai-verify-'));

  for (const job of verifyJobs) {
    const src = [
      '# reference solution',
      job.solution.trim(),
      '',
      '# tests',
      ...job.tests.map(t => `assert (${t}) is True, ${JSON.stringify(t)}`),
      ''
    ].join('\n');

    const f = path.join(dir, `verify_${job.n}.py`);
    fs.writeFileSync(f, src);
    const r = spawnSync(python, [f], { encoding: 'utf8', timeout: 15000 });

    if (r.status !== 0) {
      const why = (r.stderr || r.stdout || 'no output').trim().split('\n').slice(-3).join(' / ');
      fail(job.file, `Soal ${job.n}: the <pre class="kunci"> reference solution does not pass its own tests — ${why}`);
    }
  }

  fs.rmSync(dir, { recursive: true, force: true });
}

/* Answers in the key are plain: "42", "12.5", "-3.5", "0.0125". */
function parseNumber(raw) {
  const s = String(raw).trim().replace(/\s+/g, '');
  if (!/^-?\d*[.,]?\d+$/.test(s)) return null;
  const n = Number(s.replace(',', '.'));
  return Number.isFinite(n) ? n : null;
}

/* --- Answer key parsing ------------------------------------------------- */

function parseKeys(file, keyText) {
  const keys = new Map();
  for (const soal of splitSoal(keyText)) {
    const m = soal.body.match(/^\*\*Jawaban:\s*(.+?)\s*\*\*$/m);
    if (!m) {
      fail(file, `Soal ${soal.n} has no "**Jawaban: ...**" line in the answer key`);
      continue;
    }
    keys.set(soal.n, {
      answer: m[1].trim().replace(/^`|`$/g, ''),
      solution: stripRules(soal.body.replace(/^\*\*Jawaban:\s*.+?\s*\*\*$/m, ''))
    });
  }
  return keys;
}

/* --- Metadata from the filename ----------------------------------------- */

/* Python drills are a ladder, not a lesson: she works them in her own time and
 * revisits them, so they live in one standing section instead of being filed
 * under the meeting they were handed out in. Sorting them above "Lainnya" but
 * below every real meeting keeps that section last-but-one on the index.
 *
 *   meeting_02a_latihan_regresi_01.md -> { group: "Pertemuan 2", sort: [2,'a',1] }
 *   python_01a_alur_baca_01.md        -> { group: "Latihan Python", sort: [51,'a',1] }
 *
 * For python_NNx_…, NN is the topic and x orders the kinds within it ("a" for
 * reading sets, "b" for writing sets), so a topic's five banks stay together
 * and in order.
 */
const PY_BASE = 50;

function meta(stem) {
  const seq = Number((stem.match(/(\d+)$/) ?? [])[1] ?? 0);

  const py = stem.match(/^python[_-](\d+)([a-z]?)/i);
  if (py) return { group: 'Latihan Python', sort: [PY_BASE + Number(py[1]), py[2], seq] };

  const m = stem.match(/^meeting[_-](\d+)([a-z]?)/i);
  if (!m) return { group: 'Lainnya', sort: [99, '', 0] };
  return { group: `Pertemuan ${Number(m[1])}`, sort: [Number(m[1]), m[2], seq] };
}

const slug = s => s.replace(/_/g, '-').toLowerCase();

/* --- One file ----------------------------------------------------------- */

function convert(file) {
  const raw = fs.readFileSync(path.join(SRC, file), 'utf8').replace(/\r\n/g, '\n');
  const stem = file.replace(/\.md$/, '');

  // Teacher notes never reach the browser — the bank JSON is public.
  const noNotes = raw.split(/^#\s+Catatan pengajar\s*$/m)[0];

  const [studentPart, keyPart] = noNotes.split(/^#\s+Kunci jawaban\s*$/m);
  if (!keyPart) {
    fail(file, 'no "# Kunci jawaban" section found');
    return null;
  }

  const title = (studentPart.match(/^#\s+(.+)$/m) ?? [])[1]?.trim();
  if (!title) {
    fail(file, 'no "# <title>" heading found');
    return null;
  }

  // Intro + instructions live between the title and the first Soal.
  const beforeSoal = studentPart.split(/^##\s+Soal\s+\d+/m)[0];
  const afterTitle = beforeSoal.replace(/^#\s+.+$/m, '');
  const [intro, afterPetunjuk = ''] = afterTitle.split(/^##\s+Petunjuk jawaban\s*$/m);
  const [petunjuk, formulas] = afterPetunjuk.split(/^##\s+Rumus cepat\s*$/m);

  const keys = parseKeys(file, keyPart);
  const soals = splitSoal(studentPart);

  if (!soals.length) fail(file, 'no "## Soal N" questions found');

  const questions = [];
  for (const soal of soals) {
    const key = keys.get(soal.n);
    if (!key) {
      fail(file, `Soal ${soal.n} appears in the questions but not in the answer key`);
      continue;
    }
    const q = parseQuestion(file, soal, key);
    if (q) questions.push(q);
  }

  for (const n of keys.keys()) {
    if (!soals.some(s => s.n === n)) fail(file, `Soal ${n} is in the answer key but has no question`);
  }

  const { group, sort } = meta(stem);
  return {
    bank: {
      id: slug(stem),
      group,
      title,
      summary: stripRules(intro ?? '').split('\n\n')[0] ?? '',
      instructions: stripRules(petunjuk ?? ''),
      ...(formulas ? { formulas: stripRules(formulas) } : {}),
      questions
    },
    sort
  };
}

/* --- Run ---------------------------------------------------------------- */

if (!fs.existsSync(SRC)) {
  console.error(`Source folder not found: ${SRC}`);
  process.exit(1);
}

const files = fs.readdirSync(SRC)
  .filter(f => f.endsWith('.md') && !UNPUBLISHED_BANKS.has(f.replace(/\.md$/, '')))
  .sort();
if (!files.length) {
  console.error(`No .md files in ${SRC}`);
  process.exit(1);
}

const built = files.map(f => ({ file: f, ...(convert(f) ?? {}) })).filter(b => b.bank);

// Run every code question's reference solution against its own tests.
verifyAll();

if (problems.length) {
  console.error('\nBuild failed:\n');
  for (const p of problems) console.error('  - ' + p);
  console.error('\nNo files were written.\n');
  process.exit(1);
}

built.sort((a, b) =>
  a.sort[0] - b.sort[0] || a.sort[1].localeCompare(b.sort[1]) || a.sort[2] - b.sort[2]);

/* --check parses, validates, and runs every reference solution, then writes
 * nothing. For proofreading a draft bank without putting it on the site. */
if (CHECK_ONLY) {
  built.forEach((b, i) => { b.bank.number = i + 1; });
} else {
  fs.mkdirSync(OUT, { recursive: true });

  // Remove stale banks so a renamed source file can't leave an orphan behind.
  for (const f of fs.readdirSync(OUT)) {
    if (f.endsWith('.json') && f !== 'index.json') fs.unlinkSync(path.join(OUT, f));
  }

  built.forEach((b, i) => {
    b.bank.number = i + 1;
    fs.writeFileSync(path.join(OUT, `${b.bank.id}.json`), JSON.stringify(b.bank, null, 2) + '\n');
  });

  fs.writeFileSync(path.join(OUT, 'index.json'), JSON.stringify({
    course: 'OSN AI 2026',
    subtitle: 'Bank soal latihan',
    banks: built.map(b => b.bank.id)
  }, null, 2) + '\n');
}

console.log(CHECK_ONLY
  ? `Checked ${built.length} banks. Nothing was written.\n`
  : `Built ${built.length} banks -> public/banks/\n`);
for (const b of built) {
  const n = t => b.bank.questions.filter(q => q.type === t).length;
  const mix = [
    n('mc') && `${n('mc')} PG`,
    n('fill') && `${n('fill')} isian`,
    n('code') && `${n('code')} koding`
  ].filter(Boolean).join(', ');

  console.log(
    `  ${String(b.bank.number).padStart(2)}. ${b.bank.id}`.padEnd(52) +
    `${String(b.bank.questions.length).padStart(2)} soal  (${mix})  ${b.bank.group}`
  );
}

const nCode = verifyJobs.length;
if (nCode) console.log(`\n  ${nCode} reference solutions ran and passed their own tests.`);
console.log('');
