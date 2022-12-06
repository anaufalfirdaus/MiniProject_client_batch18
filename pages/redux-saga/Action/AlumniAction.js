import * as ActionType from '../Constants/AlumniConst'

export const GetStoryRequest = () => ({
  type : ActionType.GET_STORY_REQUEST
})
export const GetStorySuccess = (payload) => ({
  type : ActionType.GET_STORY_SUCCESS,
  payload
})
export const GetStoryFailed = (payload) => ({
  type : ActionType.GET_STORY_FAILED,
  payload
})

export const GetTestimonyRequest = () => ({
  type : ActionType.GET_TESTIMONY_REQUEST
})
export const GetTestimonySuccess = (payload) => ({
  type : ActionType.GET_TESTIMONY_SUCCESS,
  payload
})
export const GetTestimonyFailed = (payload) => ({
  type : ActionType.GET_TESTIMONY_FAILED,
  payload
})