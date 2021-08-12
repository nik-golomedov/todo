export const SWITCH_TODO_STATUS = "SWITCH_TODO_STATUS";

export const switchTodoStatus = (index) => {
  return {
    type: SWITCH_TODO_STATUS,
    index
  };
};
