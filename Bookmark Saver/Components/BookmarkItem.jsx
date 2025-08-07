import Button from "./Button";
import { useBookmark } from "../hooks/useBookmark";

const BookmarkItem = ({ url, name }) => {
  const { allBookmarks, setAllBookmarks } = useBookmark();

  function handleRemoveBookmark() {
    const confirmDelete = confirm(`Remove bookmark "${name}"?`);
    if (!confirmDelete) return;

    const filteredBookmarks = allBookmarks.filter(
      (bookmark) => bookmark.url !== url
    );
    setAllBookmarks(filteredBookmarks);
  }

  return (
    <li className="bookmark-item">
      <a
        href={url}
        className="url-link"
        target="_blank"
        rel="noopener noreferrer">
        {name}
      </a>
      <Button
        onClick={handleRemoveBookmark}
        btnClass="remove-btn"
        btnName="Remove"
      />
    </li>
  );
};

export default BookmarkItem;
