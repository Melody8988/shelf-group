import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import userInfoSaga from './userInfoSaga';
import addItemSaga from './addItemSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    userInfoSaga(),
    addItemSaga()
    // watchIncrementAsync()
  ]);
}
