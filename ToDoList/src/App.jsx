import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./Components/TaskForm";
import TaskColumn from "./Components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((tasks, index) => index != taskIndex);
    setTasks(newTasks);
  };
  const changeStatus = (taskIndex, newStatus) => {
    // setTasks((prev) => {
    //   return [...prev, prev[taskIndex]={...prev[taskIndex], status: status}]
    // });
    const updateditems = [...tasks];
    updateditems[taskIndex] = { ...updateditems[taskIndex], status: newStatus};
    setTasks(updateditems);
  };
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="To do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          changeStatus={changeStatus}
        />
        <TaskColumn
          title="Doing"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
          changeStatus={changeStatus}
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
          changeStatus={changeStatus}
        />
      </main>
    </div>
  );
};

export default App;
