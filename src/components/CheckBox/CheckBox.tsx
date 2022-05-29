import React from "react";
import "./styles.checkbox.scss";

interface CheckBoxProps {
  label: string;
  checked?: boolean;
  onChange?: (e?: any) => void;
}

const CheckBox = ({ label, ...props }: CheckBoxProps) => {
  return (
    <label className="checkbox-container">
      {label}
      <input {...props} type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};

export default CheckBox;
