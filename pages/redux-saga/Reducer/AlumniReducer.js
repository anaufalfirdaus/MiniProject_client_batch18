import * as ActionType from '../Constants/AlumniConst'

const INIT_STATE = {
  stories:[],
  testimony:[],
}

const AlumniReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_STORY_REQUEST:
      return {...state}
    case ActionType.GET_STORY_SUCCESS:
      return getAlumniStory(state, action)
    case ActionType.GET_TESTIMONY_REQUEST:
      return {...state}
    case ActionType.GET_TESTIMONY_SUCCESS:
      return getAlumniTestimony(state, action)
    default:
      return state
  }
}

const getAlumniStory = (state, action) => {
  return {
    ...state,
    stories: action.payload
  }
}

const getAlumniTestimony = (state, action) => {
  return {
    ...state,
    testimony: action.payload
  }
}

export default AlumniReducer