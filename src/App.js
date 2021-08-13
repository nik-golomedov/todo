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
              <button
                className="todo-footer__btn"
                onClick={() => dispatch(completeAllTodo())}
              >
                {activeTask.length !== 0 ? "Complete all" : "Remove"}
              </button>
            </div>

            <div className="todo-footer__btn-container">
              <button
                className={`todo-footer__btn ${
                  filterStatus === "all" && "selected"
                }`}
                onClick={() => dispatch(switchFilterStatus("all"))}
              >
                All
              </button>
              <button
                className={`todo-footer__btn ${
                  filterStatus === "active" && "selected"
                }`}
                onClick={() => dispatch(switchFilterStatus("active"))}
              >
                Active
              </button>
              <button
                className={`todo-footer__btn ${
                  filterStatus === "completed" && "selected"
                }`}
                onClick={() => dispatch(switchFilterStatus("completed"))}
              >
                Completed
              </button>
            </div>
            {completedTask.length !== 0 && (
              <button
                className="todo__clear-completed todo-footer__btn"
                onClick={() => dispatch(clearCompleted())}
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
