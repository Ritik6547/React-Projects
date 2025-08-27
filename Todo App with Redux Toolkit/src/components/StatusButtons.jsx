import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import {
  resetFilter,
  selectFilter,
  setFilter,
} from "../store/slices/todosSlice";

const StatusButtons = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className="btn-container">
      <Button
        onClick={() => dispatch(resetFilter())}
        btnClass="all-btn"
        activeClass={filter === "all" ? "active" : ""}
        label="All"
      />
      <Button
        onClick={() => dispatch(setFilter("pending"))}
        btnClass="pending-btn"
        label="Pending"
        activeClass={filter === "pending" ? "active" : ""}
      />
      <Button
        onClick={() => dispatch(setFilter("completed"))}
        btnClass="completed-btn"
        label="Completed"
        activeClass={filter === "completed" ? "active" : ""}
      />
    </div>
  );
};

export default StatusButtons;
