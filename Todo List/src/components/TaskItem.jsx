import { useTodosContext } from "../contexts/useTodosContext";

const TaskItem = ({ task, handleEdit }) => {
  const { setTasks } = useTodosContext();
  const { id, title, completed } = task;

  const handleCheckbox = () => {
    setTasks((prevTasks) => {
      return prevTasks.map((el) => {
        return el.id === id ? { ...el, completed: !el.completed } : el;
      });
    });
  };

  const handleDelete = () => {
    setTasks((prevTasks) => {
      return prevTasks.filter((el) => {
        return el.id !== id;
      });
    });
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
