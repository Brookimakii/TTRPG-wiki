export const loadFromLocalStorage = (storageKey) => {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey))
    return saved ?? []
  } catch (error) {
    console.error("Error loading pinned items:", error);
    return [];
  }
}

export const saveToLocalStorage = (storageKey, items) => {
  try {
    localStorage.setItem(storageKey, JSON.stringify(items));
  } catch (error) {
    console.error("Error saving pinned items:", error);
  }
};