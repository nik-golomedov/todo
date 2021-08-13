import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/addTodo";

const CreateTask = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value) {
      dispatch(addTodo(value));
    }
    setValue("");
  };

  return (
    <div className="createTask-field">
      <input
        onChange={handleChange}
        value={value}
        className="createTask-input input"
        placeholder="Enter your task"
        onKeyUp={(e) => {
          e.key === "Enter" && handleClick();
        }}
      />
      <button onClick={handleClick} className="createTask-btn btn">
        Add
      </button>
    </div>
  );
};

export default CreateTask;
