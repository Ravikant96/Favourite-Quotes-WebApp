import { call, put, take, takeEvery } from 'redux-saga/effects';
import { FETCH_QUOTES, FETCH_QUOTES_FAILURE, FETCH_QUOTES_SUCCESS, START_API_CALL } from "../Types/quotes";
import { api_call } from '../utils';

export function* getQoutes(data) {

    yield put({ type: START_API_CALL });

    const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=knowledge';
    const info = {
        url: apiUrl, 
        method: "GET"
    }

    let qoutes = [];
    try {
		qoutes = yield call(api_call, info);
        yield put({ type: FETCH_QUOTES_SUCCESS, payload: qoutes.data });
	} catch (error) {
        console.log("errorrr", error)
		yield put({ type: FETCH_QUOTES_FAILURE, payload: 'API FAILED TO EXECUTE' });
	}
}

export function* qoutes() {

    yield takeEvery(FETCH_QUOTES, getQoutes);
}