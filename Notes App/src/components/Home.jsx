import { useState } from "react";
import NotesList from "./NotesList";
import NotesStatus from "./NotesStatus";
import emptyNotesImg from "../assets/empty-notes-icon.svg";
import { useNotesStore } from "../stores/useNotesStore";

const Home = ({ searchQuery }) => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [filterQuery, setFilterQuery] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const notes = useNotesStore((state) => state.notes);

  const tabs = ["ALL", "PERSONAL", "HOME", "BUSINESS"];

  return (
    <div className="mt-8 px-32">
      <h2 className="text-2xl font-semibold">Your notes</h2>
      <div className="mt-8 flex justify-between">
        <div className="tab-container relative flex gap-12 font-medium tracking-widest text-gray-900/60">
          {tabs.map((tab, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  setActiveTab(tab);
                  setFilterQuery(tab === "ALL" ? "" : tab);
                }}
                className={`flex-1 cursor-pointer py-1 ${activeTab === tab ? "text-blue-400" : ""}`}
              >
                {tab}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-3 pr-10">
          <input
            className="h-5 w-5 accent-gray-500/60"
            type="checkbox"
            name="completed"
            id="completed"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <p>Show only completed notes </p>
        </div>
      </div>

      {notes.length ? (
        <NotesList
          isChecked={isChecked}
          filterQuery={filterQuery}
          searchQuery={searchQuery}
        />
      ) : (
        <NotesStatus label="You don't have any notes" imgSrc={emptyNotesImg} />
      )}
    </div>
  );
};

export default Home;
