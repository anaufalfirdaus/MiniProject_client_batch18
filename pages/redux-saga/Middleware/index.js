import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUsr from '../Constants/UsrConstant'
import * as ActionTypeClit from '../Constants/ClientConstant'
import * as ActionTypeAlumni from '../Constants/AlumniConst'
import * as ActionTypeProgram from '../Constants/ProgramConst'
import { handleUsrSignin,handleUsrSignout,handleUsrSignup } from "./UsrMidle";
import { handleGetClient } from "./ClientMidle";
import { handleGetStory, handleGetTestimony } from "./AlumniMidle";
import { handleGetBootcamp, handleGetCourse } from "./ProgramMidle";
function* watchAll(){
    yield all([
        takeEvery(ActionTypeUsr.GET_SIGNIN_REQUEST,handleUsrSignin),
        takeEvery(ActionTypeUsr.POST_SIGNOUT_REQUEST,handleUsrSignout),
        takeEvery(ActionTypeUsr.ADD_SIGNUP_REQUEST,handleUsrSignup),
        takeEvery(ActionTypeClit.GET_CLIENT_REQUEST,handleGetClient),
        takeEvery(ActionTypeAlumni.GET_STORY_REQUEST,handleGetStory),
        takeEvery(ActionTypeAlumni.GET_TESTIMONY_REQUEST,handleGetTestimony),
        takeEvery(ActionTypeProgram.GET_BOOTCAMP_REQUEST,handleGetBootcamp),
        takeEvery(ActionTypeProgram.GET_COURSE_REQUEST,handleGetCourse)
    ])
}

export default watchAll