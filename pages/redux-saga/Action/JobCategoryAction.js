import * as ActionType from "../Constants/JobCategoryConstant";

export const GetJobCategoryRequest = () => ({
  type: ActionType.GET_JOBCATEGORY_REQUEST,
});

export const GetJobCategorySuccess = (payload) => ({
  type: ActionType.GET_JOBCATEGORY_SUCCESS,
  payload,
});

export const GetJobCategoryFailed = (payload) => ({
  type: ActionType.GET_JOBCATEGORY_FAILED,
  payload,
});

export const DelJobCategoryRequest = (payload) => ({
  type: ActionType.DEL_JOBCATEGORY_REQUEST,
  payload,
});

export const DelJobCategorySuccess = (payload) => ({
  type: ActionType.DEL_JOBCATEGORY_SUCCESS,
  payload,
});

export const DelJobCategoryFailed = (payload) => ({
  type: ActionType.DEL_JOBCATEGORY_FAILED,
  payload,
});

export const GetOneJobCategoryRequest = (payload) => ({
  type: ActionType.GETONE_JOBCATEGORY_REQUEST,
  payload,
});

export const GetOneJobCategorySuccess = (payload) => ({
  type: ActionType.GETONE_JOBCATEGORY_SUCCESS,
  payload,
});

export const GetOneJobCategoryFailed = (payload) => ({
  type: ActionType.GETONE_JOBCATEGORY_FAILED,
  payload,
});

export const AddJobCategoryRequest = (payload) => ({
  type: ActionType.ADD_JOBCATEGORY_REQUEST,
  payload,
});

export const AddJobCategorySuccess = (payload) => ({
  type: ActionType.ADD_JOBCATEGORY_SUCCESS,
  payload,
});

export const AddJobCategoryFailed = (payload) => ({
  type: ActionType.ADD_JOBCATEGORY_FAILED,
  payload,
});

export const EditJobCategoryRequest = (payload) => ({
  type: ActionType.EDIT_JOBCATEGORY_REQUEST,
  payload,
});

export const EditJobCategorySuccess = (payload) => ({
  type: ActionType.EDIT_JOBCATEGORY_SUCCESS,
  payload,
});

export const EditJobCategoryFailed = (payload) => ({
  type: ActionType.EDIT_JOBCATEGORY_FAILED,
  payload,
});