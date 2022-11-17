import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUsr from '../Constants/UsrConstant';
import * as ActionTypeJobType from '../Constants/JobTypeConstant';
import * as ActionTypeJobCategory from '../Constants/JobCategoryConstant';
import { handleUsrSignin,handleUsrSignout,handleUsrSignup } from "./UsrMidle";
import { handleGetJobType, handleGetOneJobType, handleDelJobType, handleAddJobType, handleEditJobType} from "./JobTypeMiddle";
import { handleAddJobCategory, handleDelJobCategory, handleEditJobCategory, handleGetJobCategory, handleGetOneJobCategory } from "./JobCategoryMiddle";
function* watchAll(){
    yield all([
        takeEvery(ActionTypeUsr.GET_SIGNIN_REQUEST,handleUsrSignin),
        takeEvery(ActionTypeUsr.POST_SIGNOUT_REQUEST,handleUsrSignout),
        takeEvery(ActionTypeUsr.ADD_SIGNUP_REQUEST,handleUsrSignup),
        takeEvery(ActionTypeJobType.GET_JOBTYPE_REQUEST, handleGetJobType),
        takeEvery(ActionTypeJobType.GETONE_JOBTYPE_REQUEST, handleGetOneJobType),
        takeEvery(ActionTypeJobType.ADD_JOBTYPE_REQUEST, handleAddJobType),
        takeEvery(ActionTypeJobType.DEL_JOBTYPE_REQUEST, handleDelJobType),
        takeEvery(ActionTypeJobType.EDIT_JOBTYPE_REQUEST, handleEditJobType),
        takeEvery(ActionTypeJobCategory.GET_JOBCATEGORY_REQUEST, handleGetJobCategory),
        takeEvery(ActionTypeJobCategory.GETONE_JOBCATEGORY_REQUEST, handleGetOneJobCategory),
        takeEvery(ActionTypeJobCategory.ADD_JOBCATEGORY_REQUEST, handleAddJobCategory),
        takeEvery(ActionTypeJobCategory.DEL_JOBCATEGORY_REQUEST, handleDelJobCategory),
        takeEvery(ActionTypeJobCategory.EDIT_JOBCATEGORY_REQUEST, handleEditJobCategory),
    ])
}

export default watchAll