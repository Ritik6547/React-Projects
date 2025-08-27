import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { selectFilteredTodos, setEditingId } from "../store/slices/todosSlice";
import { addTaskInput } from "../store/slices/todosFormSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilteredTodos);

  const handleEdit = (id) => {
    const { title } = filteredTodos.find((task) => task.id === id);
    dispatch(addTaskInput(title));
    dispatch(setEditingId(id));
  };

  return (
    <ul className="task-list">
      {filteredTodos.map((task) => {
        return <TaskItem key={task.id} task={task} handleEdit={handleEdit} />;
      })}
    </ul>
  );
};

export default TaskList;
