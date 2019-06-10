import { createStore, compose, applyMiddleware } from 'redux';
import Reactotron from '../config/ReactotronConfig';
import reducers from './reducers';

const composer = __DEV__
  ? compose(
    applyMiddleware(...[]),
    Reactotron.createEnhancer(),
  )
  : applyMiddleware(...[]);
export const store = createStore(() => reducers, composer);
