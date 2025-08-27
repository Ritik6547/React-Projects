import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../store/slices/todosSlice";

const TaskItem = ({ task, handleEdit }) => {
  const dispatch = useDispatch();
  const { id, title, completed } = task;

  const handleCheckbox = () => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li className="item">
      <div
        onClick={handleCheckbox}
        className={`checkbox ${completed && "completed"}`}>
        {completed && <i className="fa-solid fa-check check-icon"></i>}
      </div>
      <div className={`task ${completed && "strike"}`}>{title}</div>

      <i
        onClick={() => handleEdit(id)}
        className="fa-regular fa-pen-to-square edit-icon"></i>
      <i onClick={handleDelete} className="fa-solid fa-trash delete-icon"></i>
    </li>
  );
};

export default TaskItem;
