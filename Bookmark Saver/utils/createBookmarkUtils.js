export const createBookmark = (name, url, existingBookmarks) => {
  if (!name.trim() || !url.trim())
    return { error: "Input field cannot be empty" };

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return { error: "Invalid URL format" };
  }

  const isDuplicate = existingBookmarks.some((b) => b.url === url);
  if (isDuplicate) return { error: "Duplicate bookmark" };

  return {
    bookmark: {
      name: name.trim(),
      url: url.trim(),
    },
  };
};
