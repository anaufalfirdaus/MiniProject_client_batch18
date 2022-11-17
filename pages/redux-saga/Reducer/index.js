import { combineReducers } from "redux";
import JobCategoryReducer from "./JobCategoryReducer";
import JobTypeReducer from "./JobTypeReducer";
import UsrReducer from "./UsrReducer";

const rootReducer = combineReducers({
  usrStated: UsrReducer,
  jotyStated: JobTypeReducer,
  jocaStated: JobCategoryReducer,
});

export default rootReducer;
