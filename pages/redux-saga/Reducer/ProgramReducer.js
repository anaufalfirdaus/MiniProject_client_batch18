import * as ActionType from '../Constants/ProgramConst'

const INIT_STATE = {
  bootcamp:[],
  course:[],
}

const ProgramReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_BOOTCAMP_REQUEST:
      return {...state}
    case ActionType.GET_BOOTCAMP_SUCCESS:
      return getBootcamp(state, action)
    case ActionType.GET_COURSE_REQUEST:
      return {...state}
    case ActionType.GET_COURSE_SUCCESS:
      return getCourse(state, action)
    default:
      return state
  }
}

const getBootcamp = (state, action) => {
  return {
    ...state,
    bootcamp: action.payload
  }
}

const getCourse = (state, action) => {
  return {
    ...state,
    course: action.payload
  }
}

export default ProgramReducer