import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUsr from '../Constants/UsrConstant'
import * as ActionTypeJopo from '../Constants/JopoConstant'
import { handleUsrSignin,handleUsrSignout,handleUsrSignup } from "./UsrMidle";
import { handleAddJopo, handleDelJopo, handleEditJopo, handleGetOneJopo, handleGetJopo } from "./JopoMidle";
function* watchAll(){
    yield all([
        
        takeEvery(ActionTypeUsr.GET_SIGNIN_REQUEST,handleUsrSignin),
        takeEvery(ActionTypeUsr.POST_SIGNOUT_REQUEST,handleUsrSignout),
        takeEvery(ActionTypeUsr.ADD_SIGNUP_REQUEST,handleUsrSignup),

        takeEvery(ActionTypeJopo.GET_JOPO_REQUEST,handleGetJopo),
        takeEvery(ActionTypeJopo.GETONE_JOPO_REQUEST,handleGetOneJopo),
        takeEvery(ActionTypeJopo.ADD_JOPO_REQUEST,handleAddJopo),
        takeEvery(ActionTypeJopo.DEL_JOPO_REQUEST,handleDelJopo),
        takeEvery(ActionTypeJopo.EDIT_JOPO_REQUEST,handleEditJopo)
    ])
}

export default watchAll