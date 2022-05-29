import React from "react";
import "./styles.button.scss";

interface ButtonProps {
  props?: any;
  children?: any;
  style?: object;
  color?: String;
  onClick?: (e?: any) => void;
}

const Button = ({ color, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`btn btn-${color}`}>
      {props.children}
    </button>
  );
};

export default Button;
