import * as ActionType from "../Constants/JobTypeConstant";

export const GetJobTypeRequest = () => ({
  type: ActionType.GET_JOBTYPE_REQUEST,
});

export const GetJobTypeSuccess = (payload) => ({
  type: ActionType.GET_JOBTYPE_SUCCESS,
  payload,
});

export const GetJobTypeFailed = (payload) => ({
  type: ActionType.GET_JOBTYPE_FAILED,
  payload,
});

export const DelJobTypeRequest = (payload) => ({
  type: ActionType.DEL_JOBTYPE_REQUEST,
  payload,
});

export const DelJobTypeSuccess = (payload) => ({
  type: ActionType.DEL_JOBTYPE_SUCCESS,
  payload,
});

export const DelJobTypeFailed = (payload) => ({
  type: ActionType.DEL_JOBTYPE_FAILED,
  payload,
});

export const GetOneJobTypeRequest = (payload) => ({
  type: ActionType.GETONE_JOBTYPE_REQUEST,
  payload,
});

export const GetOneJobTypeSuccess = (payload) => ({
  type: ActionType.GETONE_JOBTYPE_SUCCESS,
  payload,
});

export const GetOneJobTypeFailed = (payload) => ({
  type: ActionType.GETONE_JOBTYPE_FAILED,
  payload,
});

export const AddJobTypeRequest = (payload) => ({
  type: ActionType.ADD_JOBTYPE_REQUEST,
  payload,
});

export const AddJobTypeSuccess = (payload) => ({
  type: ActionType.ADD_JOBTYPE_SUCCESS,
  payload,
});

export const AddJobTypeFailed = (payload) => ({
  type: ActionType.ADD_JOBTYPE_FAILED,
  payload,
});

export const EditJobTypeRequest = (payload) => ({
  type: ActionType.EDIT_JOBTYPE_REQUEST,
  payload,
});

export const EditJobTypeSuccess = (payload) => ({
  type: ActionType.EDIT_JOBTYPE_SUCCESS,
  payload,
});

export const EditJobTypeFailed = (payload) => ({
  type: ActionType.EDIT_JOBTYPE_FAILED,
  payload,
});