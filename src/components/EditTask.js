import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "../store/actions/editTodo";
import { selectEditTodo } from "../store/selectors/selectors";
import PropTypes from "prop-types";

const EditTask = ({ switchMode, index }) => {
  const dispatch = useDispatch();
  const todo = useSelector(selectEditTodo(index));
  const [editValue, setEditValue] = useState(todo);

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const saveEditTodo = () => {
    dispatch(editTodo(editValue, index));
    switchMode();
  };

  const selectTargetFocus = (e) => {
    e.currentTarget.select();
  };

  const saveOnKey = (e) => {
    if (e.key === "Enter") {
      saveEditTodo();
    }
  };

  return (
    <div key={index}>
      <input
        className="todo__edit-input input"
        autoFocus={true}
        value={editValue}
        onChange={handleEditChange}
        onFocus={selectTargetFocus}
        onBlur={saveEditTodo}
        onKeyUp={saveOnKey}
      ></input>
    </div>
  );
};
EditTask.propTypes = {
  index: PropTypes.number,
  switchMode: PropTypes.func,
};
export default EditTask;
