import { ADD_TODO } from "../actions/addTodo";
import { CLEAR_COMPLETED } from "../actions/clearCompleted";
import { COMPLETE_ALL_TODO } from "../actions/completeAllTodo";
import { DELETE_TODO } from "../actions/deleteTodo";
import { EDIT_TODO } from "../actions/editTodo";
import { SWITCH_TODO_STATUS } from "../actions/switchTodoStatus";

const initialState = [{ text: "First task", status: "active" }];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, status: "active" }];
    case DELETE_TODO:
      return state.filter((item, index) => index !== action.index);
    case EDIT_TODO:
      let editNewState = [...state];
      editNewState[action.index].text = action.text;
      return editNewState;
    case SWITCH_TODO_STATUS:
      let switchNewState = [...state];
      if (switchNewState[action.index].status === "active") {
        switchNewState[action.index].status = "completed";
      } else {
        switchNewState[action.index].status = "active";
      }
      return switchNewState;
    case COMPLETE_ALL_TODO:
      return state.filter((item) => item.status !== "completed").length !== 0
        ? state.map((obj) => ({ ...obj, status: "completed" }))
        : state.map((obj) => ({ ...obj, status: "active" }));
    case CLEAR_COMPLETED:
      return state.filter((item) => item.status !== "completed");
    default:
      return state;
  }
};

export default todoReducer;
