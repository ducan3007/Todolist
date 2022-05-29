import React from "react";

import "./styles.select.scss";
interface Props {
  value?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  onChange?: (e?: any) => void;
}

const Select = ({ ...props }: Props) => {
  return (
    <div className="custom-select">
      <select style={props.style} value={props.value} onChange={props.onChange}>
        <option value="Low">Low</option>
        <option value="Normal">Normal</option>
        <option value="High">High</option>
      </select>
    </div>
  );
};

export default Select;
