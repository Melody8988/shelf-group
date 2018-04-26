import {call, put } from 'redux-saga/effects';
import axios from 'axios';


// function* rootSaga() {
//   console.log('In root saga'); 
//   yield takeEvery('ADD_ITEM', postSaga);
// }

function* postSaga(action) {
    console.log('post saga triggered', action)
    try {
      yield call(axios.put, '/api/shelf', action.payload);
      yield put({})
    } catch (error) {}
  }

export default postSaga;