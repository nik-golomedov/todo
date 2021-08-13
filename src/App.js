import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCompleted } from "./store/actions/clearCompleted";
import { completeAllTodo } from "./store/actions/completeAllTodo";
import CreateTask from "./components/CreateTask";
import Task from "./components/Task";
import {
  selectActiveTask,
  selectAllTask,
  selectCompletedTask,
  selectFilterStatus,
} from "./store/selectors/selectors";
import { switchFilterStatus } from "./store/actions/switchFilterStatus";

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectAllTask);
  const completedTask = useSelector(selectCompletedTask);
  const activeTask = useSelector(selectActiveTask);
  const filterStatus = useSelector(selectFilterStatus);

  const switchStatusFilterToAll = () => {
    dispatch(switchFilterStatus("all"));
  };

  const switchStatusFilterToActive = () => {
    dispatch(switchFilterStatus("active"));
  };

  const switchStatusFilterToCompleted = () => {
    dispatch(switchFilterStatus("completed"));
  };

  const clearCompletedTasks = () => {
    dispatch(clearCompleted());
  };
  
  const completeTasks = () => {
    dispatch(completeAllTodo());
  };

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
        {tasks.length !== 0 && (
          <div className="todo-footer">
            <div>
              <span>{activeTask.length} items left</span>
              <button className="todo-footer__btn" onClick={completeTasks}>
                {activeTask.length !== 0 ? "Complete all" : "Remove"}
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
              <button
                className="todo__clear-completed todo-footer__btn"
                onClick={clearCompletedTasks}
              >
                Clear completed[{completedTask.length}]
              </button>
            )}
          </div>
        )}
      </section>
    </main>
  );
};

export default App;
