import userApi from '../../api/UserApi';
import { call, put } from 'redux-saga/effects';
import { getProfileSuccess, getProfileFailed } from '../Action/profileAction';

// function getProfile() {
//   return axios.get(`http://localhost:3003/api/profile/${id}`);
// }

function* handleGetProfile(action) {
  try {
    const { payload } = action;
    const profile = yield call(userApi.getProfile, payload);
    yield put(getProfileSuccess(profile.data));
  } catch (error) {
    yield put(getProfileFailed(error));
  }
}

// function* handleGetEmails(action) {
//   try {
//     const { payload } = action;
//     const emails = yield call(userApi.getEmails, payload);
//     yield put(getEmailsSuccess(emails.data));
//   } catch (error) {
//     yield put(getEmailsFailed(error.message));
//   }
// }

export { handleGetProfile };
