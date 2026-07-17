/* Rendering + answer checking, shared by every page.
 *
 * Question text supports:
 *   $inline$  $$display$$  \(inline\)  \[display\]     (KaTeX)
 *   **bold**  *italic*  `code`
 *   "- " bullets, "1. " numbered lists, "> " blockquotes
 *   markdown pipe tables, with :---: alignment
 *   blank line = new paragraph
 *   raw HTML passes through untouched
 *
 * Bank content is authored by the teacher and therefore trusted. Anything a
 * STUDENT types goes through escapeHtml instead — never through renderRich.
 */

export function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

/* --- Math --------------------------------------------------------------- */

function renderMath(tex, display) {
  if (!window.katex) return escapeHtml(display ? `\\[${tex}\\]` : `\\(${tex}\\)`);
  try {
    return window.katex.renderToString(tex, {
      displayMode: display,
      throwOnError: false,
      strict: false
    });
  } catch (err) {
    console.warn('KaTeX failed on:', tex, err);
    return `<code>${escapeHtml(tex)}</code>`;
  }
}

/* Math is stashed behind a sentinel while markdown runs. U+E000 is a Private
 * Use Area codepoint, so it cannot occur in real question text — a readable
 * token like "M0" could. Built at runtime to keep this file free of control
 * characters. */
const MARK = String.fromCharCode(0xE000);
const markRe = new RegExp(MARK + '(\\d+)' + MARK, 'g');

/* --- Inline markdown ---------------------------------------------------- */

function inline(text) {
  return text
    .replace(/`([^`]+)`/g, (_, c) => `<code>${escapeHtml(c)}</code>`)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
}

/* --- Tables ------------------------------------------------------------- */

const isTableSep = l => /^\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?$/.test(l.trim());

function cells(line) {
  return line.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim());
}

function alignOf(spec) {
  const s = spec.trim();
  if (s.startsWith(':') && s.endsWith(':')) return ' style="text-align:center"';
  if (s.endsWith(':')) return ' style="text-align:right"';
  return '';
}

function table(lines) {
  const head = cells(lines[0]);
  const aligns = cells(lines[1]).map(alignOf);
  const body = lines.slice(2);

  const th = head.map((c, i) => `<th${aligns[i] ?? ''}>${inline(c)}</th>`).join('');
  const rows = body.map(l => {
    const tds = cells(l).map((c, i) => `<td${aligns[i] ?? ''}>${inline(c)}</td>`).join('');
    return `<tr>${tds}</tr>`;
  }).join('');

  // Wrapper lets a wide table scroll on its own instead of widening the page.
  return `<div class="table-scroll"><table><thead><tr>${th}</tr></thead><tbody>${rows}</tbody></table></div>`;
}

/* --- Blocks ------------------------------------------------------------- */

function blocks(src) {
  return src.split(/\n{2,}/).map(block => {
    const b = block.trim();
    if (!b) return '';

    if (/^<(table|div|figure|ul|ol|p|pre|blockquote|img|h[1-6])\b/i.test(b)) return b;

    const lines = b.split('\n').filter(l => l.trim() !== '');

    if (lines.length >= 2 && lines[0].trim().startsWith('|') && isTableSep(lines[1])) {
      return table(lines);
    }

    if (lines.every(l => /^\s*>/.test(l))) {
      const text = lines.map(l => l.replace(/^\s*>\s?/, '')).join(' ');
      return `<blockquote><p>${inline(text)}</p></blockquote>`;
    }

    if (lines.every(l => /^\s*[-*]\s+/.test(l))) {
      return `<ul>${lines.map(l => `<li>${inline(l.replace(/^\s*[-*]\s+/, ''))}</li>`).join('')}</ul>`;
    }

    if (lines.every(l => /^\s*\d+\.\s+/.test(l))) {
      return `<ol>${lines.map(l => `<li>${inline(l.replace(/^\s*\d+\.\s+/, ''))}</li>`).join('')}</ol>`;
    }

    return `<p>${inline(lines.join(' '))}</p>`;
  }).join('');
}

/* --- Public: render rich text ------------------------------------------- */

export function renderRich(src) {
  if (src == null) return '';

  // Pull math out before markdown runs, so TeX (\times, _, *) is never mangled.
  // Order matters: longest/most specific delimiters first.
  const math = [];
  const stash = String(src).replace(
    /\$\$([\s\S]+?)\$\$|\\\[([\s\S]+?)\\\]|\\\(([\s\S]+?)\\\)|\$((?:\\.|[^$\\\n])+?)\$/g,
    (_, dd, dBracket, iParen, iDollar) => {
      const display = dd ?? dBracket;
      const tex = display ?? iParen ?? iDollar;
      math.push(renderMath(tex.trim(), display !== undefined));
      return `${MARK}${math.length - 1}${MARK}`;
    }
  );

  return blocks(stash).replace(markRe, (_, i) => math[+i]);
}

export function fill(el, src) {
  el.innerHTML = renderRich(src);
  return el;
}

/* --- Answer normalising ------------------------------------------------- */

/* Accepts "5", "0.75", "2/3", "83%", and "0,75" (Indonesian decimal comma). */
export function toNumber(raw) {
  if (raw == null) return null;
  let s = String(raw).trim();
  if (!s) return null;

  s = s.replace(/\s+/g, '');
  if (/^-?\d+,\d+$/.test(s)) s = s.replace(',', '.');

  let scale = 1;
  if (s.endsWith('%')) { scale = 0.01; s = s.slice(0, -1); }

  const frac = s.match(/^(-?\d*\.?\d+)\/(-?\d*\.?\d+)$/);
  if (frac) {
    const d = parseFloat(frac[2]);
    if (!d) return null;
    return (parseFloat(frac[1]) / d) * scale;
  }

  if (!/^-?\d*\.?\d+$/.test(s)) return null;
  return parseFloat(s) * scale;
}

export function normText(raw) {
  return String(raw ?? '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[.。]+$/, '');
}

/* --- Attempt state ------------------------------------------------------ */

/* A skipped question and a wrong one both score 0, but they mean different
 * things to a teacher, so they are tracked separately throughout. */
export function isEmptyResponse(response) {
  if (response == null) return true;
  if (Array.isArray(response)) return response.every(v => String(v ?? '').trim() === '');

  // Code question: { code, tests }. Running it is the act of attempting it —
  // code typed but never run has no results to mark, so it counts as skipped.
  if (typeof response === 'object') return !Array.isArray(response.tests);

  return String(response).trim() === '';
}

/* --- Grading ------------------------------------------------------------ */

export function checkBlank(blank, response) {
  if (response == null || String(response).trim() === '') return false;

  if (blank.type === 'number') {
    const got = toNumber(response);
    if (got == null) return false;
    // Default is near-exact: these banks state their own format per question
    // and treat a right value in the wrong format as wrong.
    const tol = blank.tolerance ?? 1e-9;
    return Math.abs(got - blank.answer) <= tol;
  }

  const got = normText(response);
  const accepted = Array.isArray(blank.answer) ? blank.answer : [blank.answer];
  return accepted.some(a => normText(a) === got);
}

/* Returns points in [0, 1]. Fill questions earn partial credit per blank, and
 * code questions per passing test — the same shape, which is why adding them
 * needed no new scoring model. */
export function gradeQuestion(q, response) {
  if (q.type === 'mc') return response === q.answer ? 1 : 0;

  if (q.type === 'code') {
    const results = response?.tests;
    if (!Array.isArray(results) || !q.tests.length) return 0;
    return results.filter(Boolean).length / q.tests.length;
  }

  const marks = q.blanks.map((b, i) => checkBlank(b, response?.[i]));
  return marks.filter(Boolean).length / q.blanks.length;
}
