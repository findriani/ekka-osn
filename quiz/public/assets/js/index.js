import { escapeHtml, renderRich } from './render.js';
import { completedBankIds } from './progress.js';

const root = document.getElementById('banks');

// Summaries come from the bank's intro paragraph, so they carry markdown and
// formulas like \(\bar x\) — they need rendering, not escaping.
const stripP = html => html.replace(/^<p>|<\/p>$/g, '');

function countLine(bank) {
  const mc = bank.questions.filter(q => q.type === 'mc').length;
  const fill = bank.questions.length - mc;
  return [mc ? `${mc} pilihan ganda` : '', fill ? `${fill} isian` : ''].filter(Boolean).join(' · ');
}

function card(bank, completed) {
  const num = String(bank.number).padStart(2, '0');
  const done = completed.has(bank.id);
  return `
    <a class="bank" href="quiz.html?bank=${encodeURIComponent(bank.id)}">
      <span class="bank-num">${num}</span>
      <span>
        <span class="bank-title">${stripP(renderRich(bank.title))}</span>${done ? `
        <span class="bank-done" role="img" aria-label="Sudah dikerjakan"
              title="Sudah dikerjakan di perangkat ini">✓</span>` : ''}
      </span>
      <span class="bank-meta">
        ${bank.questions.length} soal
      </span>
    </a>`;
}

async function load() {
  try {
    const index = await (await fetch('banks/index.json')).json();

    const banks = await Promise.all(
      index.banks.map(async id => {
        const res = await fetch(`banks/${id}.json`);
        if (!res.ok) throw new Error(`Bank soal "${id}" gagal dimuat (${res.status}).`);
        return res.json();
      })
    );

    banks.sort((a, b) => a.number - b.number);

    // Group by pertemuan, preserving the order the build script established.
    const groups = new Map();
    const completed = completedBankIds();
    for (const b of banks) {
      const g = b.group ?? 'Lainnya';
      if (!groups.has(g)) groups.set(g, []);
      groups.get(g).push(b);
    }

    root.innerHTML = [...groups].map(([name, list]) => `
      <section class="group">
        <div class="part-rule"><span class="eyebrow">${escapeHtml(name)}</span></div>
        <div class="bank-list">${list.map(bank => card(bank, completed)).join('')}</div>
      </section>`).join('');
  } catch (err) {
    console.error(err);
    root.innerHTML = `<p class="empty">Bank soal gagal dimuat. ${escapeHtml(err.message)}</p>`;
  }
}

load();
