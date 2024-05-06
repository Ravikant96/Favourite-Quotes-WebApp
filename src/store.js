import { createStore, applyMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import rootReducer from './Reducers';
import rootSaga from './Saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

export default createStore(
  rootReducer,
  middleware
);

sagaMiddleware.run(rootSaga);