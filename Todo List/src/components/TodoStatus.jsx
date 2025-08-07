import { useTodosContext } from "../contexts/useTodosContext";
import { countIncompletedTasks } from "../utils/countIncompletedTasks";
import Button from "./Button";
import StatusButtons from "./StatusButtons";

const TodoStatus = ({ filteredTasks, setFilter, filter }) => {
  const { setTasks } = useTodosContext();

  const handleClearCompleted = () => {
    setFilter("all");
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => {
        return !task.completed;
      });
    });
  };

  const count = countIncompletedTasks(filteredTasks);

  return (
    <div className="status-container">
      <p>
        <span className="item-count">{count}</span>{" "}
        <span className="task-left">{count > 1 ? "tasks" : "task"} left</span>
      </p>
      <StatusButtons setFilter={setFilter} filter={filter} />
      <Button
        onClick={handleClearCompleted}
        btnClass="clear-completed"
        label="Clear Completed"
      />
    </div>
  );
};

export default TodoStatus;
