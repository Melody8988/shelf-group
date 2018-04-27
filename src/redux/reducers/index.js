import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import addItem from './addItemReducer';
import userInfo from './userInfoReducer';
import getShelf from './shelfReducer'

const store = combineReducers({
  user,
  login,
  addItem,
  userInfo,
  getShelf
  // userinfo reducers

  // additem reducers


});

export default store;
