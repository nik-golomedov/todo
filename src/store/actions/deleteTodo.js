export const DELETE_TODO = "DELETE_TODO";

export const deleteTodo = (index) => {
  return {
    type: DELETE_TODO,
    index,
  };
};
