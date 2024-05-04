import { call, put, take, takeEvery } from 'redux-saga/effects';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, START_API_CALL } from '../Types/Login';
import { userList } from '../constants';

export function* loginUser(data) {
    
    yield put({ type: START_API_CALL });

    const userData = data.payload;
    let validUser = {};

    for(const user of userList) {

        if(user.email == userData.email && user.password == userData.password) {
            validUser = user;
        }
    }

    if(Object.keys(validUser).length) {
        yield put({ type: LOGIN_SUCCESS, payload: validUser });
    } else {
        yield put({ type: LOGIN_FAILURE, payload: 'Incorrect UserName or Password' });
    }
}

export function* login() {

    yield takeEvery(LOGIN, loginUser);
}