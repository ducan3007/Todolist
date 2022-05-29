import React, { useState, memo } from "react";
import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "../../redux/tasks/tasks.action";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import CheckBox from "../CheckBox/CheckBox";
import TextArea from "./../TextArea/TextArea";
import DatePicker from "../DatePicker/DatePicker";
import Select from "../Select/Select";
import { Task } from "../../models/task";

import "./styles.task.scss";

interface Props {
  task: Task;
}

const TaskItem = ({ task, ...props }: Props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [priority, setPriority] = useState(task.priority);

  const [showDetail, setShowDetail] = useState(false);

  const handleUpdate = () => {
    console.log({
      id: task.id,
      title,
      description,
      dueDate,
      priority,
    });
  };

  const handleRemove = () => {
    dispatch(removeTask(task.id));
  };

  return (
    <div className="task-item">
      <div className="task-header">
        <CheckBox label={task?.title} />
        <div className="btn-group">
          <Button color="secondary" onClick={() => setShowDetail(!showDetail)}>
            Detail
          </Button>
          <Button color="warning" onClick={handleRemove}>
            Remove
          </Button>
        </div>
      </div>
      {showDetail && (
        <div className={`task-detail }`}>
          <div className="task-title">
            <TextField fullwidth value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <span className="label">Description</span>
            <TextArea value={description} onChange={(e) => setDescription(e.target.value)}></TextArea>
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
            <Button onClick={handleUpdate} style={{ width: "100%" }} color={"primary"}>
              Update
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(TaskItem);
