import { combineReducers } from 'redux';
// import login from './login';
import { reducer as order } from './order';

export default combineReducers({
  order,
});
