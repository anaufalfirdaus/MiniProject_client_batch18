import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import UsrReducer from './UsrReducer';

const rootReducer = combineReducers({
  usrStated: UsrReducer,
  profile: profileReducer,
});

export default rootReducer;
