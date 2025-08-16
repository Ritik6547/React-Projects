import { useNotesStore } from "../stores/useNotesStore";
import NotesCard from "./NotesCard";
import searchImg from "../assets/search.svg";

import NotesStatus from "./NotesStatus";

const NotesList = ({ filterQuery, isChecked, searchQuery }) => {
  const notes = useNotesStore((state) => state.notes);

  const filteredNotesByCategory = notes.filter((note) =>
    note.category.toLowerCase().includes(filterQuery.toLowerCase()),
  );

  const filteredNotesByCompleted = isChecked
    ? filteredNotesByCategory.filter((note) => note.completed)
    : filteredNotesByCategory;

  const searchedNotes = searchQuery.trim()
    ? filteredNotesByCompleted.filter((note) =>
        note.title.toLowerCase().includes(searchQuery.trim().toLowerCase()),
      )
    : filteredNotesByCompleted;

  if (!searchedNotes.length) {
    return <NotesStatus label="No notes found" imgSrc={searchImg} />;
  }

  return (
    <div className="mt-10 flex flex-wrap gap-6">
      {searchedNotes.map((note) => {
        return (
          <NotesCard
            key={note.id}
            category={note.category}
            title={note.title}
            desc={note.desc}
            date={note.createdAt}
            id={note.id}
            completed={note.completed}
          />
        );
      })}
    </div>
  );
};

export default NotesList;
