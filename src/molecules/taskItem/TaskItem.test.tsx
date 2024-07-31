import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TaskItem from "./TaskItem";
import { Task } from "interfaces/Task";

const task: Task = {
  id: "1",
  name: "Test Task",
  completed: false,
};

describe("TaskItem", () => {
  it("renders correctly", () => {
    const { getByDisplayValue, getByRole } = render(
      <TaskItem task={task} onToggleComplete={() => {}} onRemove={() => {}} />
    );
    expect(getByDisplayValue("Test Task")).toBeInTheDocument();
    expect(getByRole("checkbox")).toBeInTheDocument();
  });

  it("calls onToggleComplete when checkbox is clicked", () => {
    const handleToggleComplete = jest.fn();
    const { getByRole } = render(
      <TaskItem
        task={task}
        onToggleComplete={handleToggleComplete}
        onRemove={() => {}}
      />
    );
    fireEvent.click(getByRole("checkbox"));
    expect(handleToggleComplete).toHaveBeenCalledTimes(1);
  });

  it("calls onRemove when remove button is clicked", () => {
    const handleRemove = jest.fn();
    const { getByText } = render(
      <TaskItem
        task={task}
        onToggleComplete={() => {}}
        onRemove={handleRemove}
      />
    );
    fireEvent.click(getByText("Remove"));
    expect(handleRemove).toHaveBeenCalledTimes(1);
  });
});
