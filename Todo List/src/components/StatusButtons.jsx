import Button from "./Button";

const StatusButtons = ({ setFilter, filter }) => {
  return (
    <div className="btn-container">
      <Button
        onClick={() => setFilter("all")}
        btnClass="all-btn"
        activeClass={filter === "all" ? "active" : ""}
        label="All"
      />
      <Button
        onClick={() => setFilter("pending")}
        btnClass="pending-btn"
        label="Pending"
        activeClass={filter === "pending" ? "active" : ""}
      />
      <Button
        onClick={() => setFilter("completed")}
        btnClass="completed-btn"
        label="Completed"
        activeClass={filter === "completed" ? "active" : ""}
      />
    </div>
  );
};

export default StatusButtons;
