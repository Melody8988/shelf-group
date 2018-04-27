import { takeEvery, call, put} from 'redux-saga/effects';
import axios from 'axios';

function* getUserInfo(action){
    console.log('userinfo saga')
    try {
        const userInfoResponse = yield call(axios.get, '/api/userinfo');
        console.log(userInfoResponse)
        yield put({
            type: 'GET_USERINFO',
            payload: userInfoResponse.data
        })
    } catch (error) {}
}

function* userInfoSaga() {
    // When GET_TOTALS is dispached, call the getUserInfo function
    yield takeEvery('GET_TOTALS', getUserInfo);
}

export default userInfoSaga;