import {call, put } from 'redux-saga/effects';
import axios from 'axios';


function* postSaga(action) {
    console.log('in postSaga')
    try {
        // console.log('try')
        console.log('ACTION HERE', action.payload)
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
export default postSaga;

