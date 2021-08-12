import React from "react";

const CreateTask = (props) => {
  const value = props.value;
  const handleChange = props.handleChange;
  const handleClick = props.handleClick;
  
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
