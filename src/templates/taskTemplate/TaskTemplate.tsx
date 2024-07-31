import React, { useState, useEffect } from "react";

import "./TaskTemplate.css";
import { Task } from "interfaces/Task";
import InputField from "atoms/inputField/InputField";
import Button from "atoms/button/Button";
import TaskList from "organisms/taskList/TaskList";

const TaskTemplate: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTaskName, setNewTaskName] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const newTask: Task = {
      id: Math.random().toString(),
      name: newTaskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskName("");
  };

  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const removeCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  return (
    <div className="task-template">
      <InputField
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        placeholder="Add a new task"
      />
      <div className="template-buttons">
        <Button onClick={addTask} label="Add Task" />
        <Button onClick={removeCompletedTasks} label="Remove Completed Tasks" />
      </div>

      <TaskList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onRemove={removeTask}
      />
    </div>
  );
};

export default TaskTemplate;
