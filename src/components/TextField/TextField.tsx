import React from "react";
import "./styles.textfield.scss";

interface InputProps {
  value?: string;
  placeholder?: string;
  fullwidth?: boolean;
  onChange?: (e?: any) => void;
}

const TextField = ({ fullwidth, ...props }: InputProps) => {
  return <input className={`input ${fullwidth ? "fullwidth" : ""} `} {...props} />;
};

export default TextField;
