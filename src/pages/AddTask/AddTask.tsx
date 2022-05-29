import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import TextField from "../../components/TextField/TextField";
import TextArea from "../../components/TextArea/TextArea";
import DatePicker from "../../components/DatePicker/DatePicker";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";

import "./styles.scss";
import { getCurrentDate } from "../../utils/date";

const AddTask = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(getCurrentDate());
  const [priority, setPriority] = useState("Normal");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (title === "" || description === "" || dueDate === "" || priority === "") return setError(true);

    console.log({
      id: uuidv4(),
      title,
      description,
      dueDate,
      priority,
    });
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: uuidv4(),
        title,
        description,
        dueDate,
        priority,
      },
    });
    setError(false);
  };

  return (
    <div className="create-task">
      <h3 style={{ textAlign: "center" }}>New Task</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <TextField
          fullwidth
          placeholder="Add new task ..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></TextField>
        <div>
          <span className="label">Description</span>
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ height: 150 }}
          ></TextArea>
        </div>
        <div className="task-info">
          <div style={{ flex: 1 }}>
            <span className="label">Due date</span>
            <DatePicker value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </div>
          <div style={{ flex: 1 }}>
            <span className="label">Priority</span>
            <Select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              style={{ paddingTop: "8px", paddingBottom: "5px" }}
            />
          </div>
        </div>
        <div>
          {error && (
            <span style={{ color: "red" }} className="label">
              Please fill out all the fields.
            </span>
          )}
          <Button onClick={handleSubmit} style={{ width: "100%" }} color={"primary"}>
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
