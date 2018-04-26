import { takeEvery, call, put} from 'redux-saga/effects';
import axios from 'axios';

function* userInfoSaga(action){
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
export default userInfoSaga;