import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  it("renders correctly", () => {
    const { getByRole } = render(
      <Checkbox checked={false} onChange={() => {}} />
    );
    const checkbox = getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it("calls onChange when clicked", () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(
      <Checkbox checked={false} onChange={onChangeMock} />
    );
    const checkbox = getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it("reflects the correct checked state", () => {
    const { getByRole, rerender } = render(
      <Checkbox checked={false} onChange={() => {}} />
    );
    const checkbox = getByRole("checkbox");

    expect(checkbox).not.toBeChecked();

    rerender(<Checkbox checked={true} onChange={() => {}} />);
    expect(checkbox).toBeChecked();
  });
});
