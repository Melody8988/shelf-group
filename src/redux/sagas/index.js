import { all, takeEvery } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import userInfoSaga from './userInfoSaga';
import postSaga from './addItemSaga';


// Combine sagas
export default function* rootSaga() {
  console.log('in rootsaga')
  
  // Assign all the yields, listen for dispatch
  yield all([
    userSaga(),
    loginSaga(),
    userInfoSaga(),
    postSaga()
  ]);
  // These should be in the individual saga files
  //yield takeEvery('ADD_IMAGE', postSaga);
  //yield takeEvery('GET_TOTALS', userInfoSaga);
}
