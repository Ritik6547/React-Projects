import { useState } from "react";
import EmptyNotes from "./EmptyCompletedNotes";
import NotesList from "./NotesList";

const Home = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const tabs = ["ALL", "PERSONAL", "HOME", "BUSINESS"];

  return (
    <div className="mt-6 px-32">
      <h2 className="text-2xl font-semibold">Your notes</h2>
      <div className="mt-6 flex justify-between">
        <div className="tab-container relative flex gap-12 font-medium tracking-widest text-gray-900/60">
          {tabs.map((tab) => {
            return (
              <button
                onClick={() => setActiveTab(tab)}
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
          />
          <p>Show only completed notes </p>
        </div>
      </div>

      {/* <EmptyNotes label="You don't have any notes" /> */}
      <NotesList />
    </div>
  );
};

export default Home;
