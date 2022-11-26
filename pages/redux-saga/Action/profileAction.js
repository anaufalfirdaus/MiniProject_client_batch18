import { actionTypes } from '../Constants/profileType';

// * Profile
export const getProfileRequest = (payload) => ({
  type: actionTypes.GET_PROFILE_REQUEST,
  payload,
});

export const getProfileSuccess = (payload) => ({
  type: actionTypes.GET_PROFILE_SUCCESS,
  payload,
});

export const getProfileFailed = (payload) => ({
  type: actionTypes.GET_PROFILE_FAILED,
  payload,
});

// * Emails
// export const getEmailsRequest = (payload) => ({
//   type: actionTypes.GET_EMAILS_REQUEST,
//   payload,
// });

// export const getEmailsSuccess = (payload) => ({
//   type: actionTypes.GET_EMAILS_SUCCESS,
//   payload,
// });

// export const getEmailsFailed = (payload) => ({
//   type: actionTypes.GET_EMAILS_FAILED,
//   payload,
// });
