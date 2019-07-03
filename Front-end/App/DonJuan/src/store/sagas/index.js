import { all, takeLatest } from 'redux-saga/effects';
import { setOrder, removeOrder, clearOrder } from './order';
import { OrderTypes } from '../ducks/order';

export default function* rootSaga() {
  return yield all([
    takeLatest(OrderTypes.SET_ORDER_REQUEST, setOrder),
    takeLatest(OrderTypes.REMOVE_ORDER_REQUEST, removeOrder),
    takeLatest(OrderTypes.CLEAR_ORDER_REQUEST, clearOrder),
  ]);
}
