export function initLocalStorage(key, initialData) {
  const saved = localStorage.getItem(key);
  if (saved !== null) {
    return JSON.parse(saved);
  }
  localStorage.setItem(key, JSON.stringify(initialData));
  return initialData;
}
