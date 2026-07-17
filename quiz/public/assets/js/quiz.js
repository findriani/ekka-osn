import { renderRich, escapeHtml, gradeQuestion, checkBlank, isEmptyResponse } from './render.js';
import { markBankCompleted } from './progress.js';
import { PyRunner } from './pyrun.js';

const KEYS = ['A', 'B', 'C', 'D', 'E', 'F'];

/* Python is ~13 MB, so it is only ever constructed for banks that need it. */
let runner = null;

const el = {
  form:      document.getElementById('quizForm'),
  name:      document.getElementById('name'),
  questions: document.getElementById('questions'),
  grid:      document.getElementById('grid'),
  railLabel: document.getElementById('railLabel'),
  railValue: document.getElementById('railValue'),
  railUnit:  document.getElementById('railUnit'),
  formulas:  document.getElementById('formulas'),
  title:     document.getElementById('bankTitle'),
  eyebrow:   document.getElementById('bankEyebrow'),
  instr:     document.getElementById('instructions'),
  result:    document.getElementById('result'),
  scoreBig:  document.getElementById('scoreBig'),
  scoreLine: document.getElementById('scoreLine'),
  logNote:   document.getElementById('logNote'),
  actions:   document.getElementById('actions'),
  submitBtn: document.getElementById('submitBtn')
};

let bank = null;
let responses = [];      // index -> number (mc) | string[] (fill) | {code, tests} (code)
let startedAt = null;
let graded = false;

/* --- Load --------------------------------------------------------------- */

async function load() {
  const id = new URLSearchParams(location.search).get('bank');
  if (!id) return fail('Tidak ada bank soal yang dipilih.');

  try {
    const res = await fetch(`banks/${encodeURIComponent(id)}.json`);
    if (!res.ok) throw new Error(`status ${res.status}`);
    bank = await res.json();
  } catch {
    return fail(`Bank soal "${escapeHtml(id)}" tidak dapat dimuat.`);
  }

  document.title = `${bank.title} — OSN AI`;
  el.eyebrow.textContent = bank.group ?? 'Bank soal';
  el.title.textContent = bank.title;

  if (bank.instructions) {
    el.instr.innerHTML = `<span class="eyebrow">Petunjuk jawaban</span>${renderRich(bank.instructions)}`;
    el.instr.hidden = false;
  }

  if (bank.formulas) {
    el.formulas.innerHTML = `<span class="eyebrow">Rumus cepat</span>${renderRich(bank.formulas)}`;
    el.formulas.hidden = false;
  }

  responses = bank.questions.map(q => {
    if (q.type === 'mc') return null;
    if (q.type === 'code') return { code: q.starter, tests: null };
    return q.blanks.map(() => '');
  });

  // Start the Python download now, in the background, so it is ready by the
  // time she has read the first question rather than after she clicks Run.
  if (bank.questions.some(q => q.type === 'code')) {
    runner = new PyRunner();
    runner.warm().catch(() => {});   // surfaced per-run; a warm failure is not fatal here
  }

  startedAt = new Date();

  el.name.value = sessionStorage.getItem('osnai:name') ?? 'Kaye';
  renderQuestions();
  renderGrid();
  updateRail();
}

function fail(msg) {
  el.title.textContent = 'Tidak ditemukan';
  el.questions.innerHTML = `<p class="empty">${msg} <a href="./">Kembali ke semua bank soal</a>.</p>`;
  el.actions.hidden = true;
}

/* --- Questions ---------------------------------------------------------- */

const stripP = html => html.replace(/^<p>|<\/p>$/g, '');

const TYPE_LABEL = { mc: 'Pilihan ganda', fill: 'Isian', code: 'Menulis kode' };

/* The tests are shown, not hidden. They are the specification: she should be
 * reading them to learn what the function must do, exactly as latihan_python/
 * shows every one of its assertions. */
function codeHtml(q, i) {
  return `
    <div class="code-q">
      <div class="uji">
        <span class="eyebrow">Kodemu harus membuat semua baris ini bernilai True</span>
        <pre class="code">${escapeHtml(q.tests.join('\n'))}</pre>
      </div>
      <label class="sr-only" for="q${i}code">Kode Python untuk ${escapeHtml(q.id)}</label>
      <textarea class="code-input" id="q${i}code" spellcheck="false" autocomplete="off"
                autocapitalize="off" autocorrect="off" wrap="off"
                rows="${Math.max(6, q.starter.split('\n').length + 2)}">${escapeHtml(q.starter)}</textarea>
      <div class="code-bar">
        <button class="btn btn-run" type="button" data-run="${i}">Jalankan</button>
        <span class="run-status" role="status"></span>
        <span class="code-help">Tab = 4 spasi · Ctrl+Enter = jalankan</span>
      </div>
      <div class="run-out" id="out-${i}" hidden></div>
    </div>`;
}

function questionHtml(q, i) {
  const typeLabel = TYPE_LABEL[q.type] ?? 'Isian';

  const image = q.image
    ? `<figure class="q-image"><img src="${escapeHtml(q.image)}" alt="${escapeHtml(q.imageAlt ?? '')}" loading="lazy"></figure>`
    : '';

  const body = q.type === 'mc'
    ? `<div class="choices" role="radiogroup" aria-labelledby="lbl-${i}">${
        q.choices.map((c, ci) => `
          <label class="choice" data-choice="${ci}">
            <input type="radio" name="q${i}" value="${ci}">
            <span><span class="choice-key">${KEYS[ci]}</span> ${stripP(renderRich(c))}</span>
          </label>`).join('')
      }</div>`
    : q.type === 'code'
    ? codeHtml(q, i)
    : `<div class="blanks">${
        q.blanks.map((b, bi) => `
          <div class="blank" data-blank="${bi}">
            <label class="blank-label" for="q${i}b${bi}">${stripP(renderRich(b.label))}</label>
            <input class="field" type="text" id="q${i}b${bi}" autocomplete="off"
                   inputmode="${b.type === 'number' ? 'decimal' : 'text'}"
                   placeholder="${b.type === 'number' ? 'jawaban' : 'jawaban'}">
          </div>`).join('')
      }</div>`;

  // The format rule sits with the input, not buried in the prompt: these banks
  // mark a right value in the wrong format as wrong.
  const hint = q.hint ? `<p class="hint">${stripP(renderRich(q.hint))}</p>` : '';

  return `
    <article class="q" id="q-${i}" data-q="${i}">
      <div class="q-head">
        <span class="q-id">${escapeHtml(q.id)}</span>
        ${q.name ? `<span class="q-name">${escapeHtml(q.name)}</span>` : ''}
        <span class="q-type">${typeLabel}</span>
      </div>
      <div class="q-prompt" id="lbl-${i}">${renderRich(q.prompt)}</div>
      ${image}
      ${body}
      ${hint}
      <div class="sol-slot"></div>
    </article>`;
}

function renderQuestions() {
  let html = '';
  let part = null;

  bank.questions.forEach((q, i) => {
    // Banks built from banksoal/ have no parts; only draw a rule if they do.
    if (q.part && q.part !== part) {
      part = q.part;
      html += `<div class="part-rule"><span class="eyebrow">Bagian ${escapeHtml(part)}</span></div>`;
    }
    html += questionHtml(q, i);
  });

  el.questions.innerHTML = html;

  el.questions.addEventListener('change', onInput);
  el.questions.addEventListener('input', onInput);
  el.questions.addEventListener('click', onSolutionToggle);
  el.questions.addEventListener('click', onRunClick);
  el.questions.addEventListener('keydown', onEditorKey);
}

/* --- Code editor -------------------------------------------------------- */

function onRunClick(e) {
  const btn = e.target.closest('.btn-run');
  if (btn && !graded) runCode(+btn.dataset.run);
}

/* A <textarea> is not an IDE, but Python cannot survive losing its indentation,
 * so these two behaviours are not optional: Tab must insert spaces rather than
 * leave the box, and Enter must keep the current indent. */
function onEditorKey(e) {
  const ta = e.target.closest('.code-input');
  if (!ta) return;

  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    if (!graded) runCode(+ta.closest('.q').dataset.q);
    return;
  }

  // Trapping Tab traps keyboard users, so Escape is the documented way out.
  if (e.key === 'Escape') { ta.blur(); return; }

  if (e.key === 'Tab') {
    e.preventDefault();
    insertAtCursor(ta, '    ');
    return;
  }

  if (e.key === 'Enter') {
    const upto = ta.value.slice(0, ta.selectionStart);
    const line = upto.slice(upto.lastIndexOf('\n') + 1);
    const indent = (line.match(/^[ \t]*/) ?? [''])[0];
    const deeper = /:\s*$/.test(line) ? '    ' : '';
    e.preventDefault();
    insertAtCursor(ta, '\n' + indent + deeper);
  }
}

function insertAtCursor(ta, text) {
  const { selectionStart: a, selectionEnd: b } = ta;
  ta.setRangeText(text, a, b, 'end');
  ta.dispatchEvent(new Event('input', { bubbles: true }));
}

function onSolutionToggle(e) {
  const btn = e.target.closest('.sol-toggle');
  if (!btn) return;

  const sol = document.getElementById(btn.getAttribute('aria-controls'));
  const opening = sol.hidden;

  sol.hidden = !opening;
  btn.setAttribute('aria-expanded', String(opening));
  btn.textContent = opening ? 'Sembunyikan pembahasan' : 'Lihat pembahasan';
}

function onInput(e) {
  if (graded) return;

  const card = e.target.closest('.q');
  if (!card) return;
  const i = +card.dataset.q;
  const q = bank.questions[i];

  if (q.type === 'mc') {
    if (e.target.type !== 'radio') return;
    responses[i] = +e.target.value;
    card.querySelectorAll('.choice').forEach(c =>
      c.classList.toggle('picked', +c.dataset.choice === responses[i]));
  } else if (q.type === 'code') {
    if (!e.target.classList.contains('code-input')) return;
    responses[i].code = e.target.value;
    // Editing invalidates the previous run: the marks on screen are no longer
    // about the code in the box.
    if (responses[i].tests) {
      responses[i].tests = null;
      card.querySelector('.run-out').hidden = true;
      card.querySelector('.run-status').textContent = 'Kode berubah — jalankan lagi.';
    }
  } else {
    const blank = e.target.closest('.blank');
    if (!blank) return;
    responses[i][+blank.dataset.blank] = e.target.value;
  }

  updateRail();
}

/* --- Running ------------------------------------------------------------ */

async function runCode(i) {
  const q = bank.questions[i];
  const card = document.getElementById(`q-${i}`);
  const btn = card.querySelector('.btn-run');
  const status = card.querySelector('.run-status');
  const out = card.querySelector('.run-out');

  btn.disabled = true;
  status.textContent = 'Menjalankan…';

  const r = await runner.run(responses[i].code, q.tests);

  btn.disabled = graded;

  // A crash is still an attempt: every test fails, but she gets the message.
  responses[i].tests = r.fatal ? q.tests.map(() => false) : r.results.map(x => x.pass);

  const lulus = responses[i].tests.filter(Boolean).length;
  status.textContent = r.fatal ? 'Gagal dijalankan' : `${lulus} dari ${q.tests.length} lulus`;
  status.className = `run-status ${r.fatal || lulus < q.tests.length ? 'no' : 'ok'}`;

  out.innerHTML = runOutputHtml(r, q);
  out.hidden = false;
  updateRail();
}

function runOutputHtml(r, q) {
  if (r.fatal) {
    return `<div class="run-fatal"><span class="eyebrow">${
      r.timedOut ? 'Dihentikan' : 'Kode tidak bisa dijalankan'
    }</span><pre class="code">${escapeHtml(r.fatal)}</pre></div>`;
  }

  const rows = r.results.map(t => `
    <li class="${t.pass ? 'ok' : 'no'}">
      <span class="tick">${t.pass ? '✓' : '✗'}</span>
      <code>${escapeHtml(t.test)}</code>
      ${t.error ? `<span class="err">${escapeHtml(t.error)}</span>` : ''}
    </li>`).join('');

  const printed = r.stdout?.trim()
    ? `<div class="run-stdout"><span class="eyebrow">Keluaran print()</span><pre class="code">${escapeHtml(r.stdout.trim())}</pre></div>`
    : '';

  return `<ul class="uji-hasil">${rows}</ul>${printed}`;
}

/* She may write correct code and forget to press Jalankan. Running her pending
 * work at submit time costs a few seconds and avoids marking a right answer as
 * skipped. */
async function runPendingCode() {
  for (const [i, q] of bank.questions.entries()) {
    if (q.type !== 'code') continue;
    const r = responses[i];
    if (r.tests || r.code.trim() === q.starter.trim()) continue;
    await runCode(i);
  }
}

/* --- Rail (signature) --------------------------------------------------- */

function renderGrid() {
  el.grid.innerHTML = bank.questions.map((q, i) => `
    <button class="cell" type="button" data-cell="${i}" role="listitem"
            title="${escapeHtml(q.id)}" aria-label="Ke soal ${escapeHtml(q.id)}">${escapeHtml(q.id)}</button>
  `).join('');

  el.grid.addEventListener('click', e => {
    const cell = e.target.closest('.cell');
    if (!cell) return;
    document.getElementById(`q-${cell.dataset.cell}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

const attempted = i => !isEmptyResponse(responses[i]);

function updateRail() {
  let n = 0;
  bank.questions.forEach((_, i) => {
    const on = attempted(i);
    if (on) n++;
    el.grid.children[i].classList.toggle('filled', on);
  });
  el.railValue.textContent = `${n}/${bank.questions.length}`;
}

/* --- Grade -------------------------------------------------------------- */

function grade() {
  const marks = bank.questions.map((q, i) => ({
    q, i,
    points: gradeQuestion(q, responses[i]),
    attempted: attempted(i)
  }));

  const earned = marks.reduce((s, m) => s + m.points, 0);
  const total = bank.questions.length;

  return { marks, earned, total, percent: total ? (earned / total) * 100 : 0 };
}

function markQuestion({ q, i, points, attempted: tried }) {
  const card = document.getElementById(`q-${i}`);

  if (q.type === 'mc') {
    card.querySelectorAll('.choice').forEach(c => {
      const ci = +c.dataset.choice;
      c.querySelector('input').disabled = true;
      c.classList.remove('picked');

      if (ci === q.answer) {
        c.classList.add('is-answer');
        c.insertAdjacentHTML('beforeend', '<span class="verdict">Jawaban benar</span>');
      } else if (ci === responses[i]) {
        c.classList.add('is-wrong');
        c.insertAdjacentHTML('beforeend', '<span class="verdict">Jawaban kamu</span>');
      }
    });
  } else if (q.type === 'code') {
    card.querySelector('.code-input').readOnly = true;
    card.querySelector('.btn-run').disabled = true;

    const status = card.querySelector('.run-status');
    if (!tried) {
      status.textContent = 'Tidak dikerjakan';
      status.className = 'run-status';
    }
  } else {
    card.querySelectorAll('.blank').forEach((blankEl, bi) => {
      const b = q.blanks[bi];
      const input = blankEl.querySelector('input');
      const ok = checkBlank(b, responses[i][bi]);

      input.disabled = true;
      input.classList.add(ok ? 'ok' : 'no');

      const want = b.type === 'number'
        ? String(b.answer)
        : (Array.isArray(b.answer) ? b.answer[0] : b.answer);

      blankEl.insertAdjacentHTML('beforeend',
        `<span class="blank-mark ${ok ? 'ok' : 'no'}">${ok ? '✓ benar' : `✗ ${escapeHtml(want)}`}</span>`);
    });
  }

  card.querySelector('.sol-slot').innerHTML = `
    <button class="sol-toggle" type="button" aria-expanded="false" aria-controls="sol-${i}">
      Lihat pembahasan
    </button>
    <div class="sol" id="sol-${i}" hidden>${renderRich(q.solution)}</div>`;

  const cell = el.grid.children[i];
  cell.classList.remove('filled');
  cell.classList.add(
    !tried ? 'skipped' : points === 1 ? 'correct' : points > 0 ? 'partial' : 'wrong'
  );
}

/* --- Submit ------------------------------------------------------------- */

el.form.addEventListener('submit', async e => {
  e.preventDefault();
  if (graded) return;

  const name = el.name.value.trim();
  if (!name) {
    el.name.classList.add('invalid');
    el.name.focus();
    return;
  }

  el.submitBtn.disabled = true;
  if (runner) {
    el.submitBtn.textContent = 'Menjalankan kode…';
    await runPendingCode();
  }

  graded = true;
  el.name.disabled = true;
  el.submitBtn.textContent = 'Terkirim';
  sessionStorage.setItem('osnai:name', name);
  markBankCompleted(bank.id);

  const { marks, earned, total, percent } = grade();
  marks.forEach(markQuestion);

  const tried = marks.filter(m => m.attempted).length;
  const right = marks.filter(m => m.points === 1).length;

  el.railLabel.textContent = 'Benar';
  el.railUnit.textContent = 'nilai';
  el.railValue.textContent = `${round(percent)}%`;

  el.scoreBig.innerHTML = `${round(earned)}<span class="of"> / ${total}</span>`;
  el.scoreLine.textContent =
    `${round(percent)}% · ${name} · ${right} dari ${total} soal benar` +
    (tried < total ? ` · ${total - tried} soal dilewati` : '') +
    `. Buka “Lihat pembahasan” pada soal mana pun di bawah.`;
  el.result.hidden = false;
  el.result.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const attempt = {
    bankId: bank.id,
    bankTitle: bank.title,
    name,
    startedAt: startedAt.toISOString(),
    submittedAt: new Date().toISOString(),
    durationSec: Math.round((Date.now() - startedAt) / 1000),
    earned: round(earned),
    total,
    percent: round(percent),
    answers: marks.map(({ q, i, points, attempted: a }) => ({
      id: q.id,
      type: q.type,
      response: responses[i],
      attempted: a,
      points: round(points)
    }))
  };

  addRetry();
  await logAttempt(attempt);
});

function round(n) { return Math.round(n * 100) / 100; }

function addRetry() {
  el.actions.insertAdjacentHTML('afterbegin',
    `<button class="btn" type="button" id="retryBtn">Ulangi latihan ini</button>`);
  document.getElementById('retryBtn').addEventListener('click', () => location.reload());
}

/* --- Logging ------------------------------------------------------------ */

async function logAttempt(attempt) {
  try {
    const res = await fetch('/api/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(attempt)
    });
    if (!res.ok) throw new Error(`status ${res.status}`);

    note('ok', 'Hasil tersimpan. Pengajar dapat melihat hasil ini.');
  } catch (err) {
    console.warn('Logging failed:', err);
    note('warn',
      'Hasil gagal disimpan ke server — nilai di atas tetap benar. ' +
      '<a href="#" id="dl">Unduh hasil ini sebagai berkas</a> lalu kirimkan ke pengajar.');

    document.getElementById('dl')?.addEventListener('click', e => {
      e.preventDefault();
      download(attempt);
    });
  }
}

function note(kind, html) {
  el.logNote.className = `note ${kind}`;
  el.logNote.innerHTML = html;
  el.logNote.hidden = false;
}

function download(attempt) {
  const safe = attempt.name.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
  const stamp = attempt.submittedAt.replace(/[:.]/g, '-');
  const url = URL.createObjectURL(
    new Blob([JSON.stringify(attempt, null, 2)], { type: 'application/json' }));

  const a = document.createElement('a');
  a.href = url;
  a.download = `${attempt.bankId}_${safe}_${stamp}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

load();
