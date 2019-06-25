import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from '../config/ReactotronConfig';
import rootReducers from './ducks';
import rootSaga from './sagas';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(
    applyMiddleware(...middlewares),
    Reactotron.createEnhancer(),
  )
  : applyMiddleware(...middlewares);
export const store = createStore(rootReducers, composer);

sagaMiddleware.run(rootSaga);
