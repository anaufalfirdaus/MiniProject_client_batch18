import * as ActionType from "../Constants/JobTypeConstant";

const INIT_STATE = {
  jobtypes: [],
  jobtype: [],
};

const JobTypeReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_JOBTYPE_REQUEST:
      return { ...state };
    case ActionType.GET_JOBTYPE_SUCCESS:
      return GetJobTypeSuccessed(state, action);
    case ActionType.GETONE_JOBTYPE_REQUEST:
      return { ...state };
    case ActionType.GETONE_JOBTYPE_SUCCESS:
      return GetOneJobTypeSuccessed(state, action);
    case ActionType.ADD_JOBTYPE_REQUEST:
      return { ...state };
    case ActionType.ADD_JOBTYPE_SUCCESS:
      return AddJobTypeSuccessed(state, action);
    case ActionType.DEL_JOBTYPE_REQUEST:
      return { ...state };
    case ActionType.DEL_JOBTYPE_SUCCESS:
      return DelJobTypeSuccessed(state, action);
    case ActionType.EDIT_JOBTYPE_REQUEST:
      return { ...state };
    case ActionType.EDIT_JOBTYPE_SUCCESS:
      return EditJobTypeSuccessed(state, action);
    default:
      return state;
  }
};

const GetJobTypeSuccessed = (state, action) => {
  return {
    ...state,
    jobtypes: action.payload,
  };
};

const GetOneJobTypeSuccessed = (state, action) => {
  return {
    ...state,
    jobtype: action.payload,
  };
};

const DelJobTypeSuccessed = (state, action) => {
  const { payload } = action;
  const filterJobType = state.jobtypes.filter(
    (el) => el.jotyId !== payload
  );
  return {
    ...state,
    jobtypes: [...filterJobType],
  };
};

const AddJobTypeSuccessed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    jobtypes: [...state.jobtypes, payload],
  };
};

const EditJobTypeSuccessed = (state, action) => {
  const { payload } = action;
  const filterJobType = state.jobtypes.filter(
    (el) => el.jotyId !== payload.jotyId
  );
  return {
    ...state,
    jobtypes: [...filterJobType, payload],
  };
};

export default JobTypeReducer;