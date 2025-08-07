import { useEffect, useRef } from "react";

const AddTaskContainer = ({ value, onClick, editingId, error, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [editingId]);

  return (
    <>
      {error && <p className="error">{error}</p>}
      <div className="add-task-container">
        <input
          type="text"
          ref={inputRef}
          className="add-input"
          placeholder="Add Task..."
          value={value}
          onChange={(e) => onChange(e)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onClick();
            }
          }}
        />
        <button onClick={onClick} className="add-btn">
          {editingId ? "Save Task" : "Add Task"}
        </button>
      </div>
    </>
  );
};

export default AddTaskContainer;
