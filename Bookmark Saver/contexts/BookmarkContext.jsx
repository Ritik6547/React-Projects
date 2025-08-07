import { createContext, useState } from "react";
import { getInitialBookmarks } from "../utils/initialBookmarksUtils";

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [allBookmarks, setAllBookmarks] = useState(getInitialBookmarks);

  return (
    <BookmarkContext.Provider value={{ allBookmarks, setAllBookmarks }}>
      {children}
    </BookmarkContext.Provider>
  );
};
