/* eslint-disable camelcase */
import { put, call } from 'redux-saga/effects';
import { Creators as orderActions } from '../ducks/order';
import api from '../../services/api';
import { navigate } from '../../services/navigation';

export function* orderPut(action) {
  const { taste_id, size_id } = action.payload.data.pivot;
  try {
    const response = yield call(api.get, `/cart/${taste_id}/${size_id}`);
    yield put(orderActions.orderPutSuccess(response.data));
    navigate('ShoppingCart');
  } catch (err) {
    yield put(orderActions.orderFailure());
  }
}

export function* orderRemove(action) {
  const { data } = action.payload;
  try {
    yield put(orderActions.orderRemoveSuccess(data.id));
  } catch (err) {
    yield put(orderActions.orderFailure());
  }
}

export function* orderClear() {
  try {
    yield put(orderActions.orderClearSuccess());
    navigate('MyOrders');
  } catch (err) {
    yield put(orderActions.orderFailure());
  }
}
