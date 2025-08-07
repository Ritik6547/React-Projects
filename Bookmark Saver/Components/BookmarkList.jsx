import BookmarkItem from "./BookmarkItem";

import { useBookmark } from "../hooks/useBookmark";

export const BookmarkList = ({}) => {
  const { allBookmarks } = useBookmark();
  return (
    <ul className="display-container">
      {allBookmarks.map((bookmark) => {
        return (
          <BookmarkItem
            key={bookmark.url}
            url={bookmark.url}
            name={bookmark.name}
          />
        );
      })}
    </ul>
  );
};
