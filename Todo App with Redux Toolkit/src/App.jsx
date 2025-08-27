import AddTaskContainer from "./components/AddTaskContainer";
import TaskList from "./components/TaskList";
import TodoStatus from "./components/TodoStatus";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  editTodo,
  resetEditingId,
  selectAllTodos,
  selectEditingId,
} from "./store/slices/todosSlice";
import {
  addTaskInput,
  resetError,
  resetForm,
  selectError,
  selectTaskInput,
  setError,
} from "./store/slices/todosFormSlice";

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectAllTodos);
  const editingId = useSelector(selectEditingId);
  const taskInput = useSelector(selectTaskInput);
  const error = useSelector(selectError);

  const handleAddTask = () => {
    if (!taskInput.trim()) {
      dispatch(setError("Task Cannot be Empty"));
      return;
    }

    if (editingId) {
      dispatch(editTodo(taskInput));
      dispatch(resetEditingId());
      dispatch(resetForm());
      return;
    }

    const isDuplicate = tasks.some(
      (task) => task.title.toLowerCase() === taskInput.trim().toLowerCase()
    );
    if (isDuplicate) {
      dispatch(setError("Task already exists"));
      return;
    }

    dispatch(addTodo(taskInput.trim()));
    dispatch(resetForm());
  };

  const handleChange = (e) => {
    dispatch(addTaskInput(e.target.value));
    if (error) dispatch(resetError());
  };

  return (
    <>
      <div className="top-section"></div>
      <div className="bottom-section"></div>

      <main className="main-container">
        <h1 className="title">TODO</h1>

        <AddTaskContainer
          value={taskInput}
          onClick={handleAddTask}
          onChange={handleChange}
        />
        <TaskList />
        <TodoStatus />
      </main>
    </>
  );
};

export default App;
