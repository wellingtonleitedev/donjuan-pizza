import { all, takeLatest } from 'redux-saga/effects';
import { orderPut, orderRemove, orderClear } from './order';

export default function* rootSaga() {
  return yield all([
    takeLatest('ORDER_REQUEST', orderPut),
    takeLatest('ORDER_REMOVE_SUCCESS', orderRemove),
    takeLatest('ORDER_CLEAR_SUCCESS', orderClear),
  ]);
}
