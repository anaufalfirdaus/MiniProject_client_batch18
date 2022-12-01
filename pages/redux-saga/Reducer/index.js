import { combineReducers } from "redux";
import JobCategoryReducer from "./JobCategoryReducer";
import JobPostReducer from "./JobPostReducer";
import JobTypeReducer from "./JobTypeReducer";
import UsrReducer from "./UsrReducer";

const rootReducer = combineReducers({
  usrStated: UsrReducer,
  jotyStated: JobTypeReducer,
  jocaStated: JobCategoryReducer,
  jopoStated: JobPostReducer
});

export default rootReducer;
