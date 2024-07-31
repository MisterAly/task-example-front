import React from "react";
import "./TaskList.css";
import TaskItem from "molecules/taskItem/TaskItem";
import { Task } from "interfaces/Task";

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onRemove: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleComplete,
  onRemove,
}) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={() => onToggleComplete(task.id)}
          onRemove={() => onRemove(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
