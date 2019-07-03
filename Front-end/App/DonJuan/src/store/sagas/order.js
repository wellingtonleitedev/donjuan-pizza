/* eslint-disable camelcase */
import { put, call } from 'redux-saga/effects';
import orderActions from '../ducks/order';
import api from '../../services/api';
import { navigate } from '../../services/navigation';

export function* setOrder({ data }) {
  const { taste_id, size_id } = data.pivot;
  try {
    const response = yield call(api.get, `/cart/${taste_id}/${size_id}`);

    const order = {
      id: response.data.id,
      image: response.data.image,
      name: response.data.name,
      type: response.data.type.name,
      type_id: response.data.type_id,
      size: response.data.sizes[0].size,
      size_id: response.data.sizes[0].id,
      price: response.data.sizes[0].pivot.price,
    };

    yield put(orderActions.setOrderSuccess(order));
    return navigate('ShoppingCart');
  } catch (err) {
    return yield put(orderActions.orderFailure());
  }
}

export function* removeOrder({ data }) {
  try {
    return yield put(orderActions.removeOrderSuccess(data));
  } catch (err) {
    return yield put(orderActions.orderFailure());
  }
}

export function* clearOrder() {
  try {
    yield put(orderActions.clearOrderSuccess());
    return navigate('MyOrders');
  } catch (err) {
    return yield put(orderActions.orderFailure());
  }
}
