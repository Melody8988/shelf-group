import { all, takeEvery } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
// import userInfoSaga from './userInfoSaga';
import postSaga from './addItemSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    // userInfoSaga(),
    // watchIncrementAsync()
  ]);
  yield takeEvery('ADD_ITEM', postSaga);
}
