import { combineReducers } from 'redux';
import song from './song';
import layout from './layout';

export const Reducers = combineReducers({
  song,
  layout,
});
