import { useDispatch, useSelector } from "react-redux";
import { countIncompletedTasks } from "../utils/countIncompletedTasks";
import Button from "./Button";
import StatusButtons from "./StatusButtons";
import {
  deleteCompletedTodo,
  resetFilter,
  selectFilteredTodos,
} from "../store/slices/todosSlice";

const TodoStatus = () => {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilteredTodos);

  const handleClearCompleted = () => {
    dispatch(resetFilter());
    dispatch(deleteCompletedTodo());
  };

  const count = countIncompletedTasks(filteredTodos);

  return (
    <div className="status-container">
      <p>
        <span className="item-count">{count}</span>{" "}
        <span className="task-left">{count > 1 ? "tasks" : "task"} left</span>
      </p>
      <StatusButtons />
      <Button
        onClick={handleClearCompleted}
        btnClass="clear-completed"
        label="Clear Completed"
      />
    </div>
  );
};

export default TodoStatus;
