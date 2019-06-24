import { all, takeLatest, put } from 'redux-saga/effects';
import { Creators as orderActions } from '../ducks/order';

function* order(action) {
  const { data } = action.payload;
  try {
    yield put(orderActions.orderSuccess(data));
  } catch (err) {
    yield put(orderActions.orderFailure());
  }
}

export default function* rootSaga() {
  return yield all([takeLatest('ORDER_REQUEST', order)]);
}
