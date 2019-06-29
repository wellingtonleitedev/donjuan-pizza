import { all, takeLatest } from 'redux-saga/effects';
import order from './order';

export default function* rootSaga() {
  return yield all([takeLatest('ORDER_REQUEST', order)]);
}
