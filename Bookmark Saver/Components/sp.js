const { allBookmarks, setAllBookmarks } = useBookmark();

function handleRemoveBookmark() {
  const confirmDelete = confirm(`Remove bookmark "${name}"?`);
  if (!confirmDelete) return;

  const filteredBookmarks = allBookmarks.filter(
    (bookmark) => bookmark.url !== url
  );
  setAllBookmarks(filteredBookmarks);
}
