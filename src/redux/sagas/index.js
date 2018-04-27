import { all, takeEvery } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import userInfoSaga from './userInfoSaga';
import postSaga from './addItemSaga';



export default function* rootSaga() {
  console.log('in rootsaga')

  yield all([
    userSaga(),
    loginSaga(),
    userInfoSaga(),
    postSaga()
  ]);
  yield takeEvery('ADD_IMAGE', postSaga);
  yield takeEvery('GET_TOTALS', userInfoSaga);
}
