import React from "react";
import "./InputField.css";

interface InputFieldProps {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="input-field"
      placeholder={placeholder}
    />
  );
};

export default InputField;
