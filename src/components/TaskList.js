import React from "react";
import { useDispatch } from "react-redux";
import TaskItem from "./TaskItem";
import { filterTasksByStatus } from "../actions/index";
import "./TaskList.css";

const TaskList = ({ tasks, filteredStatus, isAddTaskFormVisible, setIsAddTaskFormVisible }) => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(filterTasksByStatus(event.target.value));
  };
  const filteredTasks = tasks.filter((task) => {
    if (filteredStatus === "all") {
      return tasks;
    }
    return task.status === (filteredStatus === "completed");
  });

  return (
    <div className="task-list">
      <select value={filteredStatus} onChange={handleFilterChange}>
        <option value="all">All Tasks</option>
        <option value="completed">Completed Tasks</option>
        <option value="pending">Pending Tasks</option>
      </select>
      <ul>
        {filteredTasks.map((task,index) => (
          <TaskItem key={index} task={task} isAddTaskFormVisible={isAddTaskFormVisible} setIsAddTaskFormVisible={setIsAddTaskFormVisible} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
