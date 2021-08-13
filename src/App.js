import React, { useState, useEffect } from "react";
import CreateTask from "./components/CreateTask";
import Task from "./components/Task";

const App = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([
    { text: "First task", status: "active" },
  ]);
  const [completedTask, setCompletedTask] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    setCompletedTask(tasks.filter((item) => item.status === "completed"));
  }, [tasks]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value) {
      setTasks([...tasks, { text: value, status: "active" }]);
      setValue("");
    }
  };

  const handleStatusClick = (id) => {
    setTasks((prevState) => {
      let newState = [...prevState];
      if (newState[id].status === "active") {
        newState[id].status = "completed";
      } else {
        newState[id].status = "active";
      }
      return newState;
    });
    setCompletedTask(tasks.filter((item) => item.status === "completed"));
  };

  const completeAll = () => {
    tasks.filter((item) => item.status !== "completed").length !== 0
      ? setTasks(tasks.map(item=>({...item, status:'completed'})))
      : setTasks(
          tasks.map(item=>({...item, status:'active'}))
        );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item, index) => id !== index));
  };

  const editTask = (index, newValue) => {
    setTasks((prevState) => {
      const newState = [...prevState];
      newState[index].text = newValue;
      return newState;
    });
  };

  const clearCompletedTask = () => {
    setTasks(tasks.filter((item) => item.status !== "completed"));
    setCompletedTask([]);
  };

  const switchStatusFilterToAll = () => {
    setFilterStatus("all")
  };

  const switchStatusFilterToActive = () => {
    setFilterStatus("active")
  };

  const switchStatusFilterToCompleted = () => {
    setFilterStatus("completed");
  };

  const listTasks = tasks.map((item, index) => (
    <Task
      key={index}
      item={item}
      index={index}
      deleteTask={deleteTask}
      handleChange={handleChange}
      editTask={editTask}
      handleStatusClick={handleStatusClick}
    />
  ));

  const listFiltered = tasks
    .filter((item) => item.status === filterStatus)
    .map((item, index) => (
      <Task
        key={index}
        item={item}
        index={index}
        deleteTask={deleteTask}
        handleChange={handleChange}
        editTask={editTask}
        handleStatusClick={handleStatusClick}
      />
    ));

  return (
    <main className="todo-container">
      <section>
        <h1 className="todo__header">Todo List</h1>
        <CreateTask
          value={value}
          handleClick={handleClick}
          handleChange={handleChange}
        />
        {filterStatus === "all" && <ul>{listTasks}</ul>}
        <ul>{listFiltered}</ul>
        <div className="todo-footer">
          <div>
            <span>
              {tasks.filter((item) => item.status !== "completed").length} items
              left
            </span>
            <button className="todo-footer__btn" onClick={completeAll}>
              {tasks.filter((item) => item.status !== "completed").length !== 0
                ? "Complete all"
                : "Remove"}
            </button>
          </div>

          <div className="todo-footer__btn-container">
            <button
              className={`todo-footer__btn ${
                filterStatus === "all" && "selected"
              }`}
              onClick={switchStatusFilterToAll}
            >
              All
            </button>
            <button
              className={`todo-footer__btn ${
                filterStatus === "active" && "selected"
              }`}
              onClick={switchStatusFilterToActive}
            >
              Active
            </button>
            <button
              className={`todo-footer__btn ${
                filterStatus === "completed" && "selected"
              }`}
              onClick={switchStatusFilterToCompleted}
            >
              Completed
            </button>
          </div>
          {completedTask.length !== 0 && (
            <span
              className="todo__clear-completed"
              onClick={clearCompletedTask}
            >
              Clear completed[{completedTask.length}]
            </span>
          )}
        </div>
      </section>
    </main>
  );
};

export default App;
