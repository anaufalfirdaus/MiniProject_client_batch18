import * as ActionType from '../Constants/ClientConstant'

const INIT_STATE = {
  clients:[]
}

const ClientReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_CLIENT_REQUEST:
      return {...state}
    case ActionType.GET_CLIENT_SUCCESS:
      return getListClient(state, action);
    default:
      return state
  }
}

const getListClient = (state, action) => {
  return {
    ...state,
    clients: action.payload,
  }
}

export default ClientReducer