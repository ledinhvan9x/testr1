import { combineReducers } from 'redux';
import user from './user';
import animal from './animal';

const appReducers = combineReducers({
  user,
  animal,
});

export default appReducers;
