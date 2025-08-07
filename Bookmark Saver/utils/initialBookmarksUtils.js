export const getInitialBookmarks = () => {
  try {
    const stored = localStorage.getItem("bookmarks");
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Failed to parse bookmarks:", e);
    return [];
  }
};
