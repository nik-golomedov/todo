import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "./actions/editTodo";

const EditTask = ({ switchMode, index }) => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos[index].text);
  const [editValue, setEditValue] = useState(todo);
  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };
  console.log(todo);
  return (
    <div key={index}>
      <input
        className="todo__edit-input input"
        autoFocus
        value={editValue}
        onChange={handleEditChange}
        onFocus={(e) => e.currentTarget.select()}
        onBlur={() => {
          dispatch(editTodo(editValue, index));
          switchMode();
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            dispatch(editTodo(editValue, index));
            switchMode();
          }
        }}
      ></input>
    </div>
  );
};

export default EditTask;
