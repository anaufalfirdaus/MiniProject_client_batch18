import * as ActionType from "../Constants/JobCategoryConstant";

const INIT_STATE = {
  jobcategories: [],
  jobcategory: [],
};

const JobCategoryReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_JOBCATEGORY_REQUEST:
      return { ...state };
    case ActionType.GET_JOBCATEGORY_SUCCESS:
      return GetJobCategorySuccessed(state, action);
    case ActionType.GETONE_JOBCATEGORY_REQUEST:
      return { ...state };
    case ActionType.GETONE_JOBCATEGORY_SUCCESS:
      return GetOneJobCategorySuccessed(state, action);
    case ActionType.ADD_JOBCATEGORY_REQUEST:
      return { ...state };
    case ActionType.ADD_JOBCATEGORY_SUCCESS:
      return AddJobCategorySuccessed(state, action);
    case ActionType.DEL_JOBCATEGORY_REQUEST:
      return { ...state };
    case ActionType.DEL_JOBCATEGORY_SUCCESS:
      return DelJobCategorySuccessed(state, action);
    case ActionType.EDIT_JOBCATEGORY_REQUEST:
      return { ...state };
    case ActionType.EDIT_JOBCATEGORY_SUCCESS:
      return EditJobCategorySuccessed(state, action);
    default:
      return state;
  }
};

const GetJobCategorySuccessed = (state, action) => {
  return {
    ...state,
    jobcategories: action.payload,
  };
};

const GetOneJobCategorySuccessed = (state, action) => {
  return {
    ...state,
    jobcategory: action.payload,
  };
};

const DelJobCategorySuccessed = (state, action) => {
  const { payload } = action;
  const filterJobCategory = state.jobcategories.filter(
    (el) => el.jocaId !== payload
  );
  return {
    ...state,
    jobcategories: [...filterJobCategory],
  };
};

const AddJobCategorySuccessed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    jobcategories: [...state.jobcategories, payload],
  };
};

const EditJobCategorySuccessed = (state, action) => {
  const { payload } = action;
  const filterJobCategory = state.jobcategories.filter(
    (el) => el.jocaId !== payload.jocaId
  );
  return {
    ...state,
    jobcategories: [...filterJobCategory, payload],
  };
};

export default JobCategoryReducer;