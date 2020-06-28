import { combineReducers } from 'redux';
import song from './song';
import layout from './layout';
import user from './user';

export const Reducers = combineReducers({
  song,
  layout,
  user,
});
