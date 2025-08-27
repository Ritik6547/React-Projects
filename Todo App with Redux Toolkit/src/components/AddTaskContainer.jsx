import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectEditingId } from "../store/slices/todosSlice";
import { selectError } from "../store/slices/todosFormSlice";

const AddTaskContainer = ({ value, onClick, onChange }) => {
  const editingId = useSelector(selectEditingId);
  const error = useSelector(selectError);

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
