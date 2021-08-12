import React, { useState } from "react";
import EditTask from "./EditTask";
import { GrClose } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";
const Task = ({
  deleteTask,
  editTask,
  handleChange,
  index,
  item,
  handleStatusClick,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [editValue, setEditValue] = useState(item.text);
  const completed = item.status === "completed" ? "completed" : "";

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const saveEdit = (index, newValue) => {
    editTask(index, newValue);
    setEditMode(false);
  };
  const view = (
    <React.Fragment>
      <li className="task-item">
        <label className={completed} onClick={() => handleStatusClick(index)}>
          {item.text}
        </label>
        <div className="icons-container">
          <GrClose onClick={() => deleteTask(index)}></GrClose>
          <AiOutlineEdit onClick={() => setEditMode(true)}></AiOutlineEdit>
        </div>
      </li>
    </React.Fragment>
  );

  const edit = (
    <EditTask
      saveEdit={saveEdit}
      value={item}
      handleChange={handleChange}
      editTask={editTask}
      handleEditChange={handleEditChange}
      editValue={editValue}
      index={index}
    />
  );
  return editMode ? edit : view;
};

export default Task;
