import { combineReducers } from 'redux';
import login from './login';
import order from './order';

export const reducers = combineReducers({
  login,
  order,
});
