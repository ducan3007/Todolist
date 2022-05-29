import React from "react";
import CreateTaskPage from "./pages/CreateTask/CreateTaskPage";
import TasksPage from "./pages/Tasks/TasksPage";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <CreateTaskPage />
      <TasksPage />
    </div>
  );
}

export default App;
