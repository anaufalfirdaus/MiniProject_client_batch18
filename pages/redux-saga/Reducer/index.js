import { combineReducers } from "redux";
import UsrReducer from "./UsrReducer";
import JopoReduce from "./JopoReducer";

const rootReducer = combineReducers({
    usrStated: UsrReducer,
    jopoStated: JopoReduce
})

export default rootReducer