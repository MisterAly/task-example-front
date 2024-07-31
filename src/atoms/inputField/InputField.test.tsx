import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputField from "./InputField";

describe("InputField", () => {
  it("renders correctly", () => {
    const { getByDisplayValue } = render(
      <InputField value="Test" onChange={() => {}} />
    );
    expect(getByDisplayValue("Test")).toBeInTheDocument();
  });

  it("calls onChange when value is changed", () => {
    const handleChange = jest.fn();
    const { getByDisplayValue } = render(
      <InputField value="Test" onChange={handleChange} />
    );
    fireEvent.change(getByDisplayValue("Test"), {
      target: { value: "New value" },
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
