import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import statusReducer from "./statusReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  status: statusReducer,
});

export default rootReducer;
