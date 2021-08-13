import React from "react";

const EditTask = ({
  handleEditChange,
  editValue,
  saveEdit,
  index
}) => {

  const selectTargetFocus = (e) => {
    e.currentTarget.select();
  };

  const saveOnKey = (e) => {
    if (e.key === "Enter") {
      saveEdit(index, editValue)
    }
  };

  const saveEditOnBlur = () => {
     saveEdit(index, editValue)
  }

  return (
    <div key={index}>
      <input
        className="todo__edit-input input"
        autoFocus
        value={editValue}
        onChange={handleEditChange}
        onFocus={selectTargetFocus}
        onBlur={saveEditOnBlur}
        onKeyUp={saveOnKey}
      ></input>
    </div>
  );
};

export default EditTask;
