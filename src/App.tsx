import React from "react";
import AddTask from "./pages/AddTask/AddTask";
import TodoList from "./pages/Tasks/Tasks";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <AddTask />
      <TodoList />
    </div>
  );
}

export default App;
