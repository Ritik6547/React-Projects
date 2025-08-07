import InputContainer from "./InputContainer";
import Button from "./Button";
import { BookmarkList } from "./BookmarkList";
import { useEffect, useState } from "react";
import { createBookmark } from "../utils/createBookmarkUtils";
import { useBookmark } from "../hooks/useBookmark";

const Home = () => {
  const [bookmarkName, setBookmarkName] = useState("");
  const [bookmarkUrl, setBookmarkUrl] = useState("");
  const [error, setError] = useState("");

  const { allBookmarks, setAllBookmarks } = useBookmark();

  function handleAddBookmark() {
    const result = createBookmark(bookmarkName, bookmarkUrl, allBookmarks);

    if (result.error) {
      setError(result.error);
      return;
    }

    setError("");
    setAllBookmarks((prev) => [...prev, result.bookmark]);
    setBookmarkName("");
    setBookmarkUrl("");
  }

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(allBookmarks));
  }, [allBookmarks]);

  return (
    <>
      <h1>Bookmark Saver</h1>
      <InputContainer
        setBookmarkName={setBookmarkName}
        setBookmarkUrl={setBookmarkUrl}
        bookmarkName={bookmarkName}
        bookmarkUrl={bookmarkUrl}
      />
      {error && <p className="error">{error}</p>}
      <Button
        onClick={handleAddBookmark}
        btnClass="add-btn"
        btnName="Add Bookmark"
      />
      <BookmarkList />
    </>
  );
};

export default Home;
