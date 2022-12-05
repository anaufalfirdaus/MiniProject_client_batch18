import { actionTypesCurriculum } from '../Constants/curriculumType';

export const getCurriculumsReq = () => ({
  type: actionTypesCurriculum.GET_CURRICULUMS_REQEUST,
});

export const getCurriculumsSuc = (payload) => ({
  type: actionTypesCurriculum.GET_CURRICULUMS_SUCCESS,
  payload,
});

export const getCurriculumsFal = (payload) => ({
  type: actionTypesCurriculum.GET_CURRICULUMS_FAILED,
  payload,
});
