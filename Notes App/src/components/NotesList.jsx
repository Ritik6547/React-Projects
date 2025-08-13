import NotesCard from "./NotesCard";

const NotesList = () => {
  return (
    <div className="mt-6 flex flex-wrap gap-6">
      <NotesCard category="Business" />
      <NotesCard category="Home" />
      <NotesCard category="Personal" />
      <NotesCard category="Business" />
      <NotesCard category="Home" />
      <NotesCard category="Personal" />
    </div>
  );
};

export default NotesList;
