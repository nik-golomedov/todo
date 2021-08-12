import React from "react";

const EditTask = ({
  handleEditChange,
  editValue,
  saveEdit,
  index
}) => {
  return (
    <div key={index}>
      <input
        className="todo__edit-input input"
        autoFocus
        value={editValue}
        onChange={handleEditChange}
        onFocus={(e) => e.currentTarget.select()}
        onBlur={() => saveEdit(index, editValue)}
        onKeyUp={(e) => e.key === "Enter" && saveEdit(index, editValue)}
      ></input>
    </div>
  );
};

export default EditTask;
