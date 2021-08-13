import { SWITCH_FILTER_STATUS } from "../actions/switchFilterStatus";
const initialState = { currStatus: "all" };

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_FILTER_STATUS:
      return { ...state, currStatus: action.payload };
    default:
      return state;
  }
};
export default statusReducer;
