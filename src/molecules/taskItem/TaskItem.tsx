import React from "react";

import "./TaskItem.css";
import Checkbox from "atoms/checkbox/Checkbox";
import InputField from "atoms/inputField/InputField";
import Button from "atoms/button/Button";
import { Task } from "interfaces/Task";

interface TaskItemProps {
  task: Task;
  onToggleComplete: () => void;
  onRemove: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleComplete,
  onRemove,
}) => {
  return (
    <div className="task-item">
      <Checkbox checked={task.completed} onChange={onToggleComplete} />
      <InputField value={task.name} onChange={() => {}} />
      <Button onClick={onRemove} label="Remove" />
    </div>
  );
};

export default TaskItem;
