import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import addItem from './addItemReducer';
import userInfo from './userInfoReducer';

const store = combineReducers({
  user,
  login,
  addItem,
  userInfo
});

export default store;
