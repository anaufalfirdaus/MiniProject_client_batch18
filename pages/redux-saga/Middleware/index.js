import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import * as ActionTypeUsr from '../Constants/UsrConstant';
import { actionTypes } from '../Constants/profileType';
import { handleUsrSignin, handleUsrSignout, handleUsrSignup } from './UsrMidle';
import { handleGetProfile } from './profileMiddleware';
function* watchAll() {
  yield all([
    takeEvery(ActionTypeUsr.GET_SIGNIN_REQUEST, handleUsrSignin),
    takeEvery(ActionTypeUsr.POST_SIGNOUT_REQUEST, handleUsrSignout),
    takeEvery(ActionTypeUsr.ADD_SIGNUP_REQUEST, handleUsrSignup),
    takeLatest(actionTypes.GET_PROFILE_REQUEST, handleGetProfile),
    // takeLatest(actionTypes.GET_EMAILS_REQUEST, handleGetEmails),
  ]);
}

export default watchAll;
