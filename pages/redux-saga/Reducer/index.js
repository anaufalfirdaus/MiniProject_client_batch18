import {combineReducers} from "redux";
import AlumniReducer from "./AlumniReducer";
import ClientReducer from "./ClientReducer";
import ProgramReducer from "./ProgramReducer";
import UsrReducer from "./UsrReducer";

const rootReducer = combineReducers({
    usrStated: UsrReducer,
    clitStated: ClientReducer,
    alumniStated: AlumniReducer,
    programStated: ProgramReducer,
})

export default rootReducer