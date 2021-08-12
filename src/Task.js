import React, { useState } from "react";
import EditTask from "./EditTask";
import { GrClose } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteTodo } from "./actions/deleteTodo";
import { switchTodoStatus } from "./actions/switchTodoStatus";

const Task = ({
  deleteTask,
  editTask,
  handleChange,
  index,
  item,
  handleStatusClick,
}) => {
  const [editMode, setEditMode] = useState(false);
  const completed = item.status === "completed" ? "completed" : "";
  const dispatch = useDispatch();

  const saveEdit = (index, newValue) => {
    editTask(index, newValue);
    setEditMode(false);
  };
  const switchMode = () => {
    setEditMode(false);
  };
  const view = (
    <>
      <li className="task-item">
        <label
          className={completed}
          onClick={() => dispatch(switchTodoStatus(index))}
        >
          {item.text}
        </label>
        <div className="icons-container">
          <GrClose onClick={() => dispatch(deleteTodo(index))}></GrClose>
          <AiOutlineEdit onClick={() => setEditMode(true)}></AiOutlineEdit>
        </div>
      </li>
    </>
  );

  const edit = (
    <EditTask
      saveEdit={saveEdit}
      value={item}
      editTask={editTask}
      index={index}
      switchMode={switchMode}
    />
  );
  return editMode ? edit : view;
};

export default Task;
