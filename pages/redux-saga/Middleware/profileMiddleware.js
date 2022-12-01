import { call, put } from 'redux-saga/effects';
import {
  getProfile,
  updateProfile,
  updatePassword,
  addEmail,
  removeEmail,
  addPhone,
  updateEmail,
  removePhone,
  updatePhone,
  addAddress,
  removeAddress,
  updateAddress,
  addEducation,
  removeEducation,
  updateEducation,
  addExperience,
  removeExperience,
  updateExperience,
  addSkill,
  removeSkill,
} from '../../api/UserApi';
import {
  getProfileSuccess,
  getProfileFailed,
  updateProfileSuccess,
  updateProfileFailed,
  updatePasswordSuccess,
  updatePasswordFailed,
  updateEmailSuccess,
  updateEmailFailed,
  updatePhoneSuccess,
  updatePhoneFailed,
  updateAddressSuccess,
  updateAddressFailed,
  updateEducationSuccess,
  updateEducationFailed,
  updateExperienceSuccess,
  updateExperienceFailed,
  addEmailSuccess,
  addEmailFailed,
  addPhoneSuccess,
  addPhoneFailed,
  addAddressSuccess,
  addAddressFailed,
  addEducationSuccess,
  addEducationFailed,
  addExperienceSuccess,
  addExperienceFailed,
  addSkillSuccess,
  addSkillFailed,
  removeEmailSuccess,
  removeEmailFailed,
  removePhoneSuccess,
  removePhoneFailed,
  removeAddressSuccess,
  removeAddressFailed,
  removeEducationSuccess,
  removeEducationFailed,
  removeExperienceSuccess,
  removeExperienceFailed,
  removeSkillSuccess,
  removeSkillFailed,
} from '../Action/profileAction';

function* handleGetProfile(action) {
  try {
    const { payload } = action;
    const profile = yield call(getProfile, payload);
    yield put(getProfileSuccess(profile.data));
  } catch (error) {
    yield put(getProfileFailed(error));
  }
}

function* handleUpdateProfile(action) {
  try {
    const { payload } = action;
    const updProfile = yield call(updateProfile, payload);
    yield put(updateProfileSuccess(updProfile.data));
  } catch (error) {
    yield put(updateProfileFailed(error.message));
  }
}

function* handlerUpdatePassword(action) {
  try {
    const { payload } = action;
    const updPassword = yield call(updatePassword, payload);
    yield put(updatePasswordSuccess(updPassword.data));
  } catch (error) {
    yield put(updatePasswordFailed(error.message));
  }
}

//* EMAIL
function* handlerAddEmail(action) {
  try {
    const { payload } = action;
    const newEmail = yield call(addEmail, payload);
    yield put(addEmailSuccess(newEmail.data));
  } catch (error) {
    yield put(addEmailFailed(error.message));
  }
}

function* handlerRemoveEmail(action) {
  try {
    const { payload } = action;
    const remEmail = yield call(removeEmail, payload);
    yield put(removeEmailSuccess(remEmail.data));
  } catch (error) {
    yield put(removeEmailFailed(error.message));
  }
}
function* handlerUpdateEmail(action) {
  try {
    const { payload } = action;
    const updEmail = yield call(updateEmail, payload);
    yield put(updateEmailSuccess(updEmail.data));
  } catch (error) {
    yield put(updateEmailFailed(error.message));
  }
}

//* PHONE
function* handlerAddPhone(action) {
  try {
    const { payload } = action;
    const newPhone = yield call(addPhone, payload);
    yield put(addPhoneSuccess(newPhone.data));
  } catch (error) {
    yield put(addPhoneFailed(error.message));
  }
}

function* handlerRemovePhone(action) {
  try {
    const { payload } = action;
    const remPhone = yield call(removePhone, payload);
    yield put(removePhoneSuccess(remPhone.data));
  } catch (error) {
    yield put(removePhoneFailed(error.message));
  }
}

function* handlerUpdatePhone(action) {
  try {
    const { payload } = action;
    const updPhone = yield call(updatePhone, payload);
    yield put(updatePhoneSuccess(updPhone.data));
  } catch (error) {
    yield put(updatePhoneFailed(error));
  }
}

//* ADDRESS
function* handlerAddAddress(action) {
  try {
    const { payload } = action;
    const newAddress = yield call(addAddress, payload);
    yield put(addAddressSuccess(newAddress.data));
  } catch (error) {
    yield put(addAddressFailed(error.message));
  }
}

function* handlerRemoveAddress(action) {
  try {
    const { payload } = action;
    const remAddress = yield call(removeAddress, payload);
    yield put(removeAddressSuccess(remAddress.data));
  } catch (error) {
    yield put(removeAddressFailed(error.message));
  }
}

function* handlerUpdateAddress(action) {
  try {
    const { payload } = action;
    const updAddress = yield call(updateAddress, payload);
    yield put(updateAddressSuccess(updAddress.data));
  } catch (error) {
    yield put(updateAddressFailed(error.message));
  }
}

//* EDUCATION
function* handlerAddEducation(action) {
  try {
    const { payload } = action;
    const addEdu = yield call(addEducation, payload);
    yield put(addEducationSuccess(addEdu.data));
  } catch (error) {
    yield put(addEducationFailed(error.message));
  }
}

function* handlerRemoveEducation(action) {
  try {
    const { payload } = action;
    const remEdu = yield call(removeEducation, payload);
    yield put(removeEducationSuccess(remEdu.data));
  } catch (error) {
    yield put(removeEducationFailed(error.message));
  }
}

function* handlerUpdateEducation(action) {
  try {
    const { payload } = action;
    const updEdu = yield call(updateEducation, payload);
    yield put(updateEducationSuccess(updEdu.data));
  } catch (error) {
    yield put(updateEducationFailed(error.message));
  }
}

//* EXPERIENCE
function* handlerAddExperience(action) {
  try {
    const { payload } = action;
    const addExp = yield call(addExperience, payload);
    yield put(addExperienceSuccess(addExp.data));
  } catch (error) {
    yield put(addExperienceFailed(error.message));
  }
}

function* handlerRemoveExperience(action) {
  try {
    const { payload } = action;
    const remExp = yield call(removeExperience, payload);
    yield put(removeExperienceSuccess(remExp.data));
  } catch (error) {
    yield put(removeExperienceFailed(error.message));
  }
}

function* handlerUpdateExperience(action) {
  try {
    const { payload } = action;
    const updExp = yield call(updateExperience, payload);
    yield put(updateExperienceSuccess(updExp.data));
  } catch (error) {
    yield put(updateExperienceFailed(error.message));
  }
}

//* SKILL
function* handlerAddSkill(action) {
  try {
    const { payload } = action;
    const newSkl = yield call(addSkill, payload);
    yield put(addSkillSuccess(newSkl.data));
  } catch (error) {
    yield put(addSkillFailed(error.message));
  }
}

function* handlerRemoveSkill(action) {
  try {
    const { payload } = action;
    const remSkill = yield call(removeSkill, payload);
    yield put(removeSkillSuccess(remSkill.data));
  } catch (error) {
    yield put(removeSkillFailed(error.message));
  }
}

export {
  handleGetProfile,
  handlerAddEmail,
  handlerAddPhone,
  handlerAddAddress,
  handlerAddEducation,
  handlerAddExperience,
  handlerAddSkill,
  handlerRemoveEmail,
  handlerRemovePhone,
  handlerRemoveAddress,
  handlerRemoveEducation,
  handlerRemoveExperience,
  handlerRemoveSkill,
  handleUpdateProfile,
  handlerUpdatePassword,
  handlerUpdateEmail,
  handlerUpdatePhone,
  handlerUpdateAddress,
  handlerUpdateEducation,
  handlerUpdateExperience,
};
