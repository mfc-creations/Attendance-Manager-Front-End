import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import studentReducer from "./studentReducer";

const reducers = combineReducers({
  admin: adminReducer,
  student: studentReducer,
});

export default reducers;
