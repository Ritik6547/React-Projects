import { useNotesStore } from "../stores/useNotesStore";
import NotesCard from "./NotesCard";

const NotesList = () => {
  const notes = useNotesStore((state) => state.notes);

  return (
    <div className="mt-6 flex flex-wrap gap-6">
      {notes.map((note) => {
        return (
          <NotesCard
            key={note.id}
            category={note.category}
            title={note.title}
            desc={note.desc}
            date={note.createdAt}
            id={note.id}
          />
        );
      })}
    </div>
  );
};

export default NotesList;
