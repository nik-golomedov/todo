export const EDIT_TODO = "EDIT_TODO";

export const editTodo = (payload, index) => {
  return {
    type: EDIT_TODO,
    text: payload,
    index:index
  };
};
