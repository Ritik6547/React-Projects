import TaskItem from "./TaskItem";

const TaskList = ({ filteredTasks, setTaskInput, setEditingId }) => {
  const handleEdit = (id) => {
    const { title } = filteredTasks.find((task) => task.id === id);
    setTaskInput(title);
    setEditingId(id);
  };

  return (
    <ul className="task-list">
      {filteredTasks.map((task) => {
        return <TaskItem key={task.id} task={task} handleEdit={handleEdit} />;
      })}
    </ul>
  );
};

export default TaskList;
