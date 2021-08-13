import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "./actions/editTodo";
import { selectEditTodo } from "./selectors/selectors";

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

  return (
    <div key={index}>
      <input
        className="todo__edit-input input"
        autoFocus
        value={editValue}
        onChange={handleEditChange}
        onFocus={(e) => e.currentTarget.select()}
        onBlur={saveEditTodo}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            saveEditTodo();
          }
        }}
      ></input>
    </div>
  );
};

export default EditTask;
