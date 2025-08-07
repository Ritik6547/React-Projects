import { useContext } from "react";
import { BookmarkContext } from "../contexts/BookmarkContext";

export const useBookmark = () => useContext(BookmarkContext);
