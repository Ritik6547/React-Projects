const NotesCard = ({ category }) => {
  return (
    <div className="w-[400px] rounded-lg bg-white p-5 shadow-md">
      <div className="flex items-center justify-between">
        <button
          className={`rounded-3xl px-3 py-[6px] ${category === "Business" ? "bg-[#CE93D8]" : category === "Home" ? "bg-[#A5D6A7]" : "bg-[#FFCC80]"} ${category === "Business" ? "text-[#4527A0]" : category === "Home" ? "text-[#1B5E20]" : "text-[#E65100]"}`}
        >
          {category}
        </button>
        <div className="flex items-center gap-6 text-gray-500">
          <input
            className="h-5 w-5 cursor-pointer accent-gray-500/60"
            type="checkbox"
          />
          <i class="fa-solid fa-pen cursor-pointer"></i>
          <i class="fa-solid fa-trash cursor-pointer"></i>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-3 tracking-wide">
        <h3 className="text-xl font-medium text-gray-900/85">
          Finish the task on the board
        </h3>
        <p className="pb-8 text-gray-900/85">
          Remember to finish task on the board. After finishing give for
          evaluation Matt.
        </p>
      </div>
      <p className="font-nunito mt-2 text-right text-sm tracking-wide text-gray-900/60">
        22.01.2023
      </p>
    </div>
  );
};

export default NotesCard;
