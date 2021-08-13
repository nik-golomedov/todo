import React from "react";

const CreateTask = ({value, handleChange, handleClick}) => {

  const enterOnKey = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="createTask-field">
      <input
        onChange={handleChange}
        value={value}
        className="createTask-input input"
        placeholder="Enter your task"
        onKeyUp={enterOnKey}
      />
      <button onClick={handleClick} className="createTask-btn btn">
        Add
      </button>
    </div>
  );
};

export default CreateTask;
