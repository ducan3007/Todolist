import React from "react";
import "./styles.textarea.scss";

interface TextAreaProps {
  value?: string;
  placeholder?: string;
  fullwidth?: boolean;
  style?: React.CSSProperties;
  onChange?: (e?: any) => void;
}

const TextArea = ({ ...props }: TextAreaProps) => {
  return <textarea className="text-area" {...props}></textarea>;
};

export default TextArea;
