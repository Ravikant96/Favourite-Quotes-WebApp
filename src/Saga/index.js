import { all } from 'redux-saga/effects';
import { login } from './login';

const sagaObject = [
    login()
]

const combinedSaga = [...sagaObject];

function* rootSaga() {
	yield all(combinedSaga);
}

export default rootSaga;
