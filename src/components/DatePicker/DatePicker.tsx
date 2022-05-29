import React from "react";

import DateIcon from "../../icons/DateIcon";
import { getCurrentDate, formatDate } from "../../utils/date";
import "./styles.datepicker.scss";

interface DatePickerProps {
  value?: any;
  style?: object;
  className?: string;
  onChange?: (value: any) => void;
}

const DatePicker = ({ onChange, style, ...props }: DatePickerProps) => {

  const [date, setDate] = React.useState(getCurrentDate());

  return (
    <div style={style} className={`date-picker-container ${props.className}`}>
      <div className="date-picker-content">
        <span style={{ fontSize: "1.3rem", paddingLeft: 9, userSelect: "none" }}>{formatDate(props?.value || "")}</span>
      </div>
      <div className="date-picker-button">
        <span className="date-picker">
          <span className="date-picker-toggle">
            <DateIcon width="20px" height="20px" />
          </span>
          <input className="date-picker-input" min={getCurrentDate()} type="date" onChange={onChange} />
        </span>
      </div>
    </div>
  );
};

export default DatePicker;
