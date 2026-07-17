# OSN AI — bank soal latihan

A drill site: students pick a question set, work it, submit for an immediate
score, and read the step-by-step solution. Every submitted attempt is logged for
the teacher. Built for Cloudflare Pages (`*.pages.dev`).

**pages.dev is Cloudflare, not AWS.** Everything here fits the free tier.

The student-facing site is in Indonesian, matching the question banks.

---

## Adding a bank — the only workflow you need

1. Write a new `.md` file into **`../banksoal/`** in the usual format.
2. Run `npm run banks`.
3. Done. It appears on the site.

No JSON to hand-edit, no index to update, no database change. The build reads
every `.md` in `banksoal/` and regenerates `public/banks/` from scratch.

The build **fails loudly and writes nothing** if a bank is malformed — a missing
answer key, a question with no key entry, a letter answer with no A./B./C.
options. A silently wrong answer key is worse than no bank.

### Source format the build expects

```markdown
# Latihan Regresi 01 — Prediksi, Residual, dan MSE

Fokus set ini: ...            <- optional; becomes the summary on the bank list

## Petunjuk jawaban

<answer-format rules for the whole set>

## Rumus cepat                 <- optional; shown below the question navigator

<formulas or decision rules needed for this set>

## Soal 1 — Angkringan Malioboro

<question text>

*Tuliskan jawaban sebagai bilangan bulat.*     <- optional format rule

**Jawaban:** `_____`

---

## Soal 2 — Bengkel servis motor

<question text>

- **A.** pilihan pertama
- **B.** pilihan kedua
- **C.** pilihan ketiga
- **D.** pilihan keempat

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: 40**

<worked solution — becomes "Lihat pembahasan">

## Soal 2

**Jawaban: D**

<worked solution>

# Catatan pengajar        <- everything from here down is NEVER shipped
```

### How each part is read

| Source | Becomes |
|---|---|
| `# <title>` | bank title |
| paragraph before `## Petunjuk jawaban` | summary on the bank list |
| `## Petunjuk jawaban` | the blue instructions panel on the quiz page |
| `## Rumus cepat` | the formula reference below the question navigator |
| `## Soal N — <name>` | question `SN`, with `<name>` shown beside it |
| `- **A.** …` options | a real multiple-choice question with radio buttons |
| `*Tuliskan jawaban…*` | the orange format hint shown against the input box |
| `**Jawaban: X**` | the answer — a letter, an integer, a decimal, or a word |
| `**Jawaban: kode**` | a **code question** — see below; she writes Python and runs it |
| text after `**Jawaban: X**` | the step-by-step solution |
| `# Catatan pengajar` | **dropped** — never reaches the browser |

Filenames drive grouping and order: `meeting_02a_latihan_regresi_01.md` lands
under **Pertemuan 2A** and sorts by the trailing number. A file that doesn't
match `meeting_<n><a|b>_…` still works; it groups under **Lainnya**.

### Answer matching

- **Numbers** — matched near-exactly (`1e-9`), because these banks state a
  format per question and treat a right value in the wrong format as wrong. So
  if the key says `55` (a floored percentage), `55.56` is marked wrong. That is
  deliberate and matches the printed drill's own rule.
  Students may type `12,5` (Indonesian decimal comma), `3/4`, or `75%` — all are
  parsed.
- **Words** — case-insensitive; runs of whitespace are *collapsed*, not removed,
  so `[1,2,3]` and `[1, 2, 3]` are **different** answers. Only one word answer
  can be keyed, so state the exact expected form in the question or prefer a
  number. Trailing full stop ignored.
- **Multiple choice** — options must run `A`, `B`, `C`… in order.

Formulas use `\(inline\)`, `\[display\]`, `$inline$`, or `$$display$$` (KaTeX).
Markdown tables, blockquotes, `**bold**`, and `` `code` `` all render.

### Code listings

There is **no ``` fence**. The renderer joins the lines of a paragraph with
spaces, which would silently destroy indentation — the one thing Python cannot
lose. Write a raw `<pre class="code">` block instead; blocks starting with
`<pre` pass through untouched:

```html
<pre class="code">total = 0
for n in [3, 8]:
    total += n</pre>
```

Two rules, both of which fail silently if broken:

- **Escape `<`, `>`, and `&`** yourself — the block is raw HTML, so `0 <= n`
  must be written `0 &lt;= n`.
- **No blank lines inside the block.** Blocks are split on blank lines, so a
  gap ends the `<pre>` and the remainder gets mangled as a paragraph.

See `banksoal/meeting_07_latihan_python_diagnostik_01.md` for a worked example.

### Code questions — she writes Python, the browser runs it

Set the key to **`**Jawaban: kode**`** and the question becomes a code editor.
Python runs in the page via Pyodide, so nothing is installed on her machine.

```markdown
## Soal 1 — Skor lomba

Tulis `jumlah_genap(data)` yang mengembalikan jumlah bilangan genap.

<pre class="starter">def jumlah_genap(data):
    # tulis kodemu di sini
    return None</pre>

<pre class="uji">jumlah_genap([3, 8, 5, 4]) == 12
jumlah_genap([]) == 0</pre>

**Jawaban:** `_____`

# Kunci jawaban

## Soal 1

**Jawaban: kode**

<pre class="kunci">def jumlah_genap(data):
    return sum(n for n in data if n % 2 == 0)</pre>

<worked explanation — shown under "Lihat pembahasan">
```

| Block | Role |
|---|---|
| `<pre class="starter">` | prefills the editor. **Required** — it gives her the signature |
| `<pre class="uji">` | one test per line, each an expression that must be `True`. Blank lines and `#comments` are ignored |
| `<pre class="kunci">` | reference solution, in the answer key. **Required** |

**The tests are shown to her.** They are the specification, exactly as
`latihan_python/` shows every assertion. Write them to be read.

**Scoring is per test**, reusing the same partial-credit path as multi-blank
fill questions: four tests, three passing, 0.75. So write several tests per
question and make each one catch a *different* mistake — a single test is
trivially satisfied by `return 12`.

**`npm run banks` runs every reference solution against its own tests** by
shelling out to `python`, and fails the build if one does not pass. A code
question whose key cannot pass its own tests is the same bug as a wrong number
in an answer key. This makes Python a build dependency.

Her **source code is logged** — `answers_json` carries `{code, tests}` per
question, so `/admin` → *Unduh JSON* shows exactly what she typed, including on
questions she got wrong. That is usually more useful than the score.

Notes on the runtime, all deliberate:

- **No NumPy.** No packages are ever loaded, so `import numpy` raises
  `ModuleNotFoundError`. This enforces the 2025 preselection rule for free.
- **5-second limit.** Python cannot be interrupted politely, so a runaway
  `while True:` is stopped by destroying the worker; the next run reboots it.
- **A run is an attempt.** Code typed but never run has no results to mark, so
  it counts as skipped. Submitting auto-runs any edited-but-unrun question, so
  forgetting to press *Jalankan* cannot cost her marks. An untouched starter is
  left alone and stays skipped.
- **Pyodide is ~13 MB** and loads lazily — only banks containing a code question
  fetch it, and it starts downloading as the page opens, not on first run.
  `npm install` vendors it (`npm run vendor:pyodide`); like KaTeX, it is served
  from this origin so no CDN can take the drills down.

> **Careful:** bank content is trusted and **not** escaped, so HTML in a source
> file renders as HTML. That is what makes the tables and formulas work. Never
> paste text from an untrusted source into a bank. Anything a *student* types is
> always escaped.

---

## Run it locally

```bash
cd quiz
npm install
cp .dev.vars.example .dev.vars     # sets TEACHER_TOKEN for local dev
npm run db:local                   # create the local table
npm run banks                      # build banks from ../banksoal
npm run dev                        # http://localhost:8788
```

Local D1 is a file under `.wrangler/`, entirely separate from production.

---

## Deploy

```bash
npx wrangler d1 create osn-ai-quiz      # paste the printed id into wrangler.toml
npm run db:remote                       # create the table in production
npx wrangler pages secret put TEACHER_TOKEN
npm run banks && npm run deploy
```

The first three are one-time. After that `npm run banks && npm run deploy` is
the whole release.

Connecting the repo to Pages in the dashboard also works: set **root directory**
to `quiz`, **build command** to `npm run banks`, and **build output directory**
to `public`.

---

## Reviewing attempts

Open `/admin`, paste your `TEACHER_TOKEN`. You get every attempt: time, name,
bank, score, **how many questions were attempted**, duration, and a per-question
strip. **Unduh CSV** opens cleanly in Excel; **Unduh JSON** has the raw answers,
including exactly what each student typed in each blank.

Skipped questions are tracked separately from wrong ones — hollow in the strip,
`-` in the CSV — because a student who ran out of time and one who
misunderstood need different responses from you. A skipped question still scores
**0**, so the percentage always means "out of the whole set".

The page is `noindex` and unlinked, but it is not secret. The token is what
protects the data.

---

## How it fits together

| Piece | What it is |
|---|---|
| `../banksoal/*.md` | **The source of truth.** Where you write questions. |
| `tools/build-banks.mjs` | The converter. `npm run banks`. |
| `public/banks/*.json` | Generated. Do not hand-edit; the build overwrites it. |
| `public/` | The site. Plain HTML, CSS, ES modules — no framework. |
| `functions/api/log.js` | `POST /api/log` — writes one attempt to D1. |
| `functions/api/attempts.js` | `GET /api/attempts` — teacher token required. |
| `schema.sql` | The single `attempts` table. |
| `public/assets/katex/` | KaTeX, vendored so formulas need no CDN. |
| `public/assets/pyodide/` | CPython in WebAssembly. Generated by `npm install`. |
| `assets/js/py-worker.js` | Runs her Python, off the main thread. |
| `assets/js/pyrun.js` | Owns the worker and the 5-second kill switch. |
| `tools/vendor-pyodide.mjs` | Copies Pyodide out of `node_modules`. |

Scoring happens **in the browser**. The answer key ships inside the bank JSON.

---

## Deliberate limits

Choices, not oversights. Revisit them if the site's purpose changes.

- **The answer key is public.** It ships to the browser, so a student who opens
  DevTools can read it. Fine for self-study drills, wrong for a graded exam.
  Hiding it means moving scoring into a Function and splitting each bank into
  public questions and private answers.
- **Anyone can post an attempt.** There are no student accounts, so `/api/log`
  is open and a name is just typed text. The log is a study record, not an exam
  result.
- **One shared teacher token**, with no rate limiting on `/api/attempts`.
  Proportionate for practice scores; not for anything confidential. Consider
  Cloudflare Access if that changes.
- **Only auto-markable questions belong here.** Anything asking a student to
  *explain* or *justify* cannot be machine-marked and stays on paper.
- **Code questions are marked in the browser too.** The page reports which
  tests passed, so DevTools can post a perfect result without running anything,
  and the reference solution ships in the bank JSON like every other key. Same
  bargain as the rest of the site: fine for self-study, wrong for a graded exam.
  The logged source code is what makes an attempt worth reading anyway.
- **`npm run banks` deletes and rewrites every file in `public/banks/`.** Renamed
  source files leave no orphans behind — but never keep hand-written JSON there.
