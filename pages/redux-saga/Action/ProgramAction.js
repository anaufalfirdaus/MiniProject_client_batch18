import * as ActionType from '../Constants/ProgramConst'

export const GetBootcampRequest = () => ({
  type: ActionType.GET_BOOTCAMP_REQUEST
})
export const GetBootcampSuccess = (payload) => ({
  type: ActionType.GET_BOOTCAMP_SUCCESS,
  payload
})
export const GetBootcampFailed = (payload) => ({
  type: ActionType.GET_BOOTCAMP_FAILED,
  payload
})

export const GetCourseRequest = () => ({
  type: ActionType.GET_COURSE_REQUEST
})
export const GetCourseSuccess = (payload) => ({
  type: ActionType.GET_COURSE_SUCCESS,
  payload
})
export const GetCourseFailed = (payload) => ({
  type: ActionType.GET_COURSE_FAILED,
  payload
})