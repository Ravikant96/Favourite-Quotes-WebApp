import { all } from 'redux-saga/effects';
import { login } from './login';
import { qoutes } from './qoutes';

const sagaObject = [
    login(),
    qoutes()
]

const combinedSaga = [...sagaObject];

function* rootSaga() {
	yield all(combinedSaga);
}

export default rootSaga;
