import {call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* postData(action) {
    console.log('in postSaga')
    try {
        console.log('try')
        console.log('ACTION HERE', action)
        const addItem = yield call(axios.post, '/api/shelf', action.payload);
        console.log('added item', addItem);
        yield put({
            type: 'POST_IMAGE',
            payload: addItem.data
        })
    } catch (error) {
        console.log('postSaga ERROR', error)
    }
}

function* postSaga(){
    yield takeEvery('ADD_IMAGE', postData);
}

export default postSaga;

