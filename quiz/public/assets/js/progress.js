const KEY = 'osnai:completed-banks';

function savedIds() {
  try {
    const value = JSON.parse(localStorage.getItem(KEY) ?? '[]');
    return Array.isArray(value) ? value.filter(id => typeof id === 'string') : [];
  } catch {
    return [];
  }
}

export function completedBankIds() {
  return new Set(savedIds());
}

export function markBankCompleted(id) {
  if (!id) return;
  const ids = completedBankIds();
  ids.add(String(id));
  try {
    localStorage.setItem(KEY, JSON.stringify([...ids]));
  } catch {
    // The quiz remains usable when browser storage is unavailable.
  }
}
