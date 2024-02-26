import { combineReducers } from 'redux';
import userDetails from './userDetails/userDetails';

const rootReducer = combineReducers({
  user: userDetails,
});

export default rootReducer;
