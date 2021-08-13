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
