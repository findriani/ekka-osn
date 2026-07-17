import { escapeHtml, isEmptyResponse } from './render.js';

const el = {
  authForm:   document.getElementById('authForm'),
  token:      document.getElementById('token'),
  authNote:   document.getElementById('authNote'),
  panel:      document.getElementById('panel'),
  rows:       document.getElementById('rows'),
  count:      document.getElementById('count'),
  csvBtn:     document.getElementById('csvBtn'),
  jsonBtn:    document.getElementById('jsonBtn'),
  refreshBtn: document.getElementById('refreshBtn')
};

let attempts = [];

/* --- Fetch -------------------------------------------------------------- */

function token() { return sessionStorage.getItem('osnai:token') ?? ''; }

async function fetchAttempts() {
  const res = await fetch('/api/attempts', {
    headers: { Authorization: `Bearer ${token()}` }
  });

  if (res.status === 401) throw new Error('Token ditolak.');
  if (!res.ok) throw new Error(`Server mengembalikan ${res.status}.`);
  return (await res.json()).attempts;
}

/* --- Render ------------------------------------------------------------- */

const fmt = new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium', timeStyle: 'short' });

function band(p) { return p >= 80 ? 'hi' : p >= 50 ? 'mid' : 'lo'; }

/* Attempts logged before the field existed fall back to the response itself. */
const wasAttempted = a => a.attempted ?? !isEmptyResponse(a.response);

/* Per-question strip: the quiz rail's instrument, in miniature. Skipped reads
   as absence (hollow), never as a wrong answer. */
function strip(answers) {
  return answers.map(a => {
    const tried = wasAttempted(a);
    const style = !tried
      ? 'background:transparent;border:1px dashed var(--rule)'
      : a.points === 1 ? 'background:var(--green);border:1px solid var(--green)'
      : a.points > 0   ? 'background:var(--orange);border:1px solid var(--orange)'
      : 'background:var(--red-wash);border:1px solid var(--red)';

    const label = !tried ? 'dilewati' : a.points === 1 ? 'benar' : a.points > 0 ? 'sebagian' : 'salah';
    return `<span title="${escapeHtml(a.id)}: ${label}" style="display:inline-block;width:9px;height:9px;${style};border-radius:1px;margin-right:2px"></span>`;
  }).join('');
}

function mmss(sec) {
  if (sec == null) return '—';
  return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
}

function triedCount(a) { return a.answers.filter(wasAttempted).length; }

function render() {
  el.count.textContent = `${attempts.length} pengerjaan`;

  if (!attempts.length) {
    el.rows.innerHTML = `<tr><td colspan="8" class="empty">Belum ada pengerjaan yang tercatat.</td></tr>`;
    return;
  }

  el.rows.innerHTML = attempts.map(a => {
    const tried = triedCount(a);
    const partial = tried < a.answers.length;
    return `
    <tr>
      <td class="mono" style="white-space:nowrap">${escapeHtml(fmt.format(new Date(a.submittedAt)))}</td>
      <td>${escapeHtml(a.name)}</td>
      <td>${escapeHtml(a.bankTitle ?? a.bankId)}</td>
      <td class="num">${a.earned}/${a.total}</td>
      <td class="num"><span class="pct ${band(a.percent)}">${Math.round(a.percent)}%</span></td>
      <td class="num" ${partial ? 'style="color:var(--orange)"' : ''}>${tried}/${a.answers.length}</td>
      <td class="num">${mmss(a.durationSec)}</td>
      <td style="white-space:nowrap">${strip(a.answers)}</td>
    </tr>`;
  }).join('');
}

/* --- Download ----------------------------------------------------------- */

function save(text, filename, mime) {
  const url = URL.createObjectURL(new Blob([text], { type: mime }));
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function stamp() { return new Date().toISOString().slice(0, 10); }

function toCsv() {
  const cell = v => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const head = ['submitted_at', 'name', 'bank_id', 'bank_title', 'earned', 'total',
                'percent', 'attempted', 'question_count', 'duration_sec', 'answers'];

  const body = attempts.map(a => [
    a.submittedAt, a.name, a.bankId, a.bankTitle,
    a.earned, a.total, a.percent, triedCount(a), a.answers.length, a.durationSec,
    // "-" marks a skipped question, so it never reads as a wrong answer.
    a.answers.map(x => `${x.id}=${wasAttempted(x) ? x.points : '-'}`).join(' ')
  ].map(cell).join(','));

  // BOM so Excel opens UTF-8 names correctly.
  return '﻿' + [head.join(','), ...body].join('\r\n');
}

/* --- Wiring ------------------------------------------------------------- */

async function load() {
  try {
    attempts = await fetchAttempts();
    el.authForm.hidden = true;
    el.panel.hidden = false;
    render();
  } catch (err) {
    sessionStorage.removeItem('osnai:token');
    el.authForm.hidden = false;
    el.panel.hidden = true;
    el.authNote.textContent = err.message;
    el.authNote.hidden = false;
  }
}

el.authForm.addEventListener('submit', e => {
  e.preventDefault();
  el.authNote.hidden = true;
  sessionStorage.setItem('osnai:token', el.token.value.trim());
  load();
});

el.refreshBtn.addEventListener('click', load);
el.csvBtn.addEventListener('click', () => save(toCsv(), `osnai-hasil-${stamp()}.csv`, 'text/csv'));
el.jsonBtn.addEventListener('click', () =>
  save(JSON.stringify(attempts, null, 2), `osnai-hasil-${stamp()}.json`, 'application/json'));

if (token()) load();
