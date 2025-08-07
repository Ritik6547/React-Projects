import { useMemo, useState } from "react";
import AddTaskContainer from "./components/AddTaskContainer";
import TaskList from "./components/TaskList";
import TodoStatus from "./components/TodoStatus";
import { useTodosContext } from "./contexts/useTodosContext";

const App = () => {
  const { tasks, setTasks } = useTodosContext();
  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  const filteredTasks = useMemo(() => {
    if (filter === "pending") {
      return tasks.filter((task) => !task.completed);
    }
    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  }, [filter, tasks]);

  const handleAddTask = () => {
    if (!taskInput.trim()) {
      setError("Task Cannot be Empty");
      return;
    }

    if (editingId) {
      setTasks((prevTasks) => {
        return prevTasks.map((task) => {
          return task.id === editingId ? { ...task, title: taskInput } : task;
        });
      });
      setEditingId(null);
      setTaskInput("");
      setError("");
      return;
    }

    const isDuplicate = tasks.some(
      (task) => task.title.toLowerCase() === taskInput.trim().toLowerCase()
    );
    if (isDuplicate) {
      setError("Task already exists");
      return;
    }

    const task = {
      id: crypto.randomUUID(),
      title: taskInput.trim(),
      completed: false,
    };

    setTasks((prevTask) => [...prevTask, task]);
    setTaskInput("");
    setError("");
  };

  const handleChange = (e) => {
    setTaskInput(e.target.value);
    if (error) setError("");
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
          editingId={editingId}
          error={error}
          onChange={handleChange}
        />
        <TaskList
          filteredTasks={filteredTasks}
          setEditingId={setEditingId}
          setTaskInput={setTaskInput}
        />
        <TodoStatus
          filteredTasks={filteredTasks}
          setFilter={setFilter}
          filter={filter}
        />
      </main>
    </>
  );
};

export default App;
