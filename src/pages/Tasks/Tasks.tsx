import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../redux/selector";

import { Task } from "../../models/task";

import Button from "../../components/Button/Button";
import TaskItem from "../../components/TaskItem/TaskItem";
import TextField from "../../components/TextField/TextField";
import "./styles.scss";

const Tasks = () => {
  const dispatch = useDispatch();
  const { tasks: TaskList } = useSelector(getTasks);
  console.log("🚀 ~ file: Tasks.tsx ~ line 15 ~ Tasks ~ taskList", TaskList);
  const [search, setSearch] = useState("");

  // const [showAction, setShowAction] = useState(false);

  const [checkedTasks, setCheckedTasks] = useState([""]);

  return (
    <div className="tasks-container">
      <div className="tasks-content">
        <h3 style={{ textAlign: "center" }}>Todo List</h3>
        <div className="search-bar">
          <TextField
            fullwidth
            placeholder="Search ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></TextField>
        </div>
        <div className="list-task">
          {TaskList?.map((task: Task) => {
            return <TaskItem key={task.id} task={task}></TaskItem>;
          })}
        </div>
      </div>

      <div className={`bulk-action ${checkedTasks.length !== 0 ? "display-none" : ""}`}>
        <div>
          <span style={{ fontSize: "1.6rem", display: "block" }}>Bulk Action:</span>
        </div>
        <div className="btn-group">
          <Button color="secondary">Done</Button>
          <Button color="warning">Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
