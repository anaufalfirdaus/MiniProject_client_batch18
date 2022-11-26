import { actionTypes } from '../Constants/profileType';

const initial_state = {
  profile: {},
  isLoading: false,
  errors: null,
};

const profileReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE_REQUEST: {
      return { ...state, isLoading: true };
    }
    case actionTypes.GET_PROFILE_SUCCESS: {
      return { ...state, isLoading: false, profile: { ...action.payload } };
    }
    case actionTypes.GET_PROFILE_FAILED: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    // case actionTypes.GET_EMAILS_REQUEST: {
    //   return { ...state, isLoading: true };
    // }
    // case actionTypes.GET_EMAILS_SUCCESS: {
    //   return { ...state, isLoading: false, emails: [...action.payload] };
    // }
    // case actionTypes.GET_EMAILS_FAILED: {
    //   return { ...state, isLoading: false, errors: action.payload };
    // }
    default: {
      return { ...state };
    }
  }
};

export default profileReducer;
