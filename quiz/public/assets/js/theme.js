const button = document.querySelector('[data-theme-toggle]');

function currentTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function renderToggle() {
  if (!button) return;
  const dark = currentTheme() === 'dark';
  button.textContent = dark ? '☀ Tema terang' : '☾ Tema gelap';
  button.setAttribute('aria-pressed', String(dark));
  button.setAttribute('aria-label', dark ? 'Gunakan tema terang' : 'Gunakan tema gelap');
}

button?.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('osnai:theme', next);
  renderToggle();
});

renderToggle();
