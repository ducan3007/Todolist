import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../redux/selector";
import { bulkUpdateTask } from "../../redux/tasks/tasks.action";
import { Task } from "../../models/task";

import Button from "../../components/Button/Button";
import TaskItem from "../../components/TaskItem/TaskItem";
import TextField from "../../components/TextField/TextField";
import "./styles.scss";

const TasksPage = () => {
  const dispatch = useDispatch();

  const { tasks } = useSelector(getTasks);

  const [search, setSearch] = useState("");

  const [checkedTasks, setCheckedTasks] = useState<Task[] | []>([]);

  const handleBulkRemove = () => {
    let newTasks = tasks.filter((task: never) => !checkedTasks.includes(task));
    dispatch(bulkUpdateTask(newTasks));
    setCheckedTasks([]);
  };

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
          {tasks
            ?.sort((task_a: any, task_b: any) => {
              return new Date(task_a.dueDate).valueOf() - new Date(task_b.dueDate).valueOf();
            })
            .map((task: Task) => {
              if (task.title.includes(search))
                return <TaskItem key={task.id} task={task} pushCheckedTask={setCheckedTasks}></TaskItem>;
              return null;
            })}
        </div>
      </div>

      <div className={`bulk-action ${checkedTasks.length === 0 ? "display-none" : ""}`}>
        <div>
          <span style={{ fontSize: "1.6rem", display: "block" }}>Bulk Action:</span>
        </div>
        <div className="btn-group">
          <Button color="secondary">Done</Button>
          <Button color="warning" onClick={handleBulkRemove}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
