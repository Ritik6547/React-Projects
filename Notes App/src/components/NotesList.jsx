import { useNotesStore } from "../stores/useNotesStore";
import NotesCard from "./NotesCard";

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
        note.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : filteredNotesByCompleted;

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
