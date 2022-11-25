import { combineReducers } from "redux";
import UsrReducer from "./UsrReducer";
import ContReducer from "./ContReducer";
import CoreReducer from "./CoreReducer";
import EmpReducer from "./EmpReducer";
import SkteReducer from "./SkteReducer";
import SktyReducer from "./SktyReducer";

const rootReducer = combineReducers({
    usrStated: UsrReducer,
    contStated: ContReducer,
    coreStated: CoreReducer,
    empStated: EmpReducer,
    skteStated: SkteReducer,
    sktyStated: SktyReducer,
})

export default rootReducer