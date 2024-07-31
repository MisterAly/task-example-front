import React from "react";
import "./ToDo.css";
import TaskTemplate from "templates/taskTemplate/TaskTemplate";

const ToDoPage: React.FC = () => {
  return (
    <div className="todo-page">
      <h1>To-Do List</h1>
      <TaskTemplate />
    </div>
  );
};

export default ToDoPage;
