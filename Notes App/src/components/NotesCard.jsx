import { useNoteForm } from "../hooks/useNoteForm";
import { useModalStore } from "../stores/useModalStore";
import { useNotesStore } from "../stores/useNotesStore";

const NotesCard = ({ category, title, desc, date, id, completed }) => {
  const deleteNote = useNotesStore((state) => state.deleteNote);
  const toggleNote = useNotesStore((state) => state.toggleNote);
  const openModal = useModalStore((state) => state.openModal);
  const notes = useNotesStore((state) => state.notes);
  const { setNoteInput } = useNoteForm();

  return (
    <div
      className={`flex w-[400px] flex-col justify-between gap-4 rounded-lg ${completed ? "bg-[#EEEEEE]" : "bg-white"} p-5 shadow-[0_0_8px_rgba(0,0,0,0.2)]`}
    >
      <div className="">
        <div className="flex items-center justify-between">
          <button
            className={`rounded-3xl px-3 py-[6px] ${category === "Business" ? "bg-[#CE93D8]" : category === "Home" ? "bg-[#A5D6A7]" : "bg-[#FFCC80]"} ${category === "Business" ? "text-[#4527A0]" : category === "Home" ? "text-[#1B5E20]" : "text-[#E65100]"} ${completed && "bg-gray-900/36"} ${completed && "text-black/50"}`}
          >
            {category}
          </button>
          <div className="flex items-center gap-6 text-gray-500">
            <input
              className="h-5 w-5 cursor-pointer accent-gray-500/60"
              type="checkbox"
              onClick={() => toggleNote(id)}
            />
            <i
              onClick={() => console.log("edit")}
              class="fa-solid fa-pen cursor-pointer"
            ></i>
            <i
              onClick={() => deleteNote(id)}
              class="fa-solid fa-trash cursor-pointer"
            ></i>
          </div>
        </div>
        <div
          className={`mt-4 flex flex-col gap-3 tracking-wide ${completed ? "text-gray-900/36" : "text-gray-900/85"}`}
        >
          <h3
            className={`text-2xl font-semibold ${completed && "line-through"} ${completed && "decoration-1"}`}
          >
            {title}
          </h3>
          <p className={`${completed && "line-through"}`}>{desc}</p>
        </div>
      </div>
      <p className="font-nunito text-right text-sm tracking-wide text-gray-900/60">
        {date}
      </p>
    </div>
  );
};

export default NotesCard;
