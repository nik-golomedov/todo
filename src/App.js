import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCompleted } from "./actions/clearCompleted";
import { completeAllTodo } from "./actions/completeAllTodo";
import CreateTask from "./CreateTask";
import Task from "./Task";

const App = () => {
  const [completedTask, setCompletedTask] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos);
  console.log(tasks);

  useEffect(() => {
    setCompletedTask(tasks.filter((item) => item.status === "completed"));
  }, [tasks]);

  const listTasks = tasks.map((item, index) => (
    <Task key={index} item={item} index={index} />
  ));

  const listFiltered = tasks
    .filter((item) => item.status === filterStatus)
    .map((item, index) => <Task key={index} item={item} index={index} />);

  return (
    <main className="todo-container">
      <section>
        <h1 className="todo__header">Todo List</h1>
        <CreateTask />
        {filterStatus === "all" && <ul>{listTasks}</ul>}
        <ul>{listFiltered}</ul>
        <div className="todo-footer">
          <div>
            <span>
              {tasks.filter((item) => item.status !== "completed").length} items
              left
            </span>
            <button
              className="todo-footer__btn"
              onClick={() => dispatch(completeAllTodo())}
            >
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
              onClick={() => setFilterStatus("all")}
            >
              All
            </button>
            <button
              className={`todo-footer__btn ${
                filterStatus === "active" && "selected"
              }`}
              onClick={() => setFilterStatus("active")}
            >
              Active
            </button>
            <button
              className={`todo-footer__btn ${
                filterStatus === "completed" && "selected"
              }`}
              onClick={() => setFilterStatus("completed")}
            >
              Completed
            </button>
          </div>
          {completedTask.length !== 0 && (
            <span
              className="todo__clear-completed"
              onClick={() => dispatch(clearCompleted())}
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
