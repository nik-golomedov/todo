import React, { useState } from "react";
import EditTask from "./EditTask";
import { GrClose } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/actions/deleteTodo";
import { switchTodoStatus } from "../store/actions/switchTodoStatus";
import PropTypes from "prop-types";

const Task = ({ index, item }) => {
  const [editMode, setEditMode] = useState(false);
  const completed = item.status === "completed" ? "completed" : "";
  const dispatch = useDispatch();

  const deleteTask = (index) => {
    dispatch(deleteTodo(index));
  };

  const switchTaskStatus = (index) => {
    dispatch(switchTodoStatus(index));
  };

  const switchMode = () => {
    setEditMode(editMode === false ? true : false);
  };

  const view = (
    <>
      <li className="task-item">
        <label className={completed} onClick={() => switchTaskStatus(index)}>
          {item.text}
        </label>
        <div className="icons-container">
          <GrClose onClick={() => deleteTask(index)}></GrClose>
          <AiOutlineEdit onClick={switchMode}></AiOutlineEdit>
        </div>
      </li>
    </>
  );

  const edit = <EditTask index={index} switchMode={switchMode} />;
  return editMode ? edit : view;
};
Task.propTypes = {
  index: PropTypes.number,
  item: PropTypes.shape({
    text: PropTypes.string,
    status: PropTypes.string,
  }),
};

export default Task;
