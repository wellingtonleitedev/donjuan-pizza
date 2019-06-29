/* eslint-disable camelcase */
import { put, call } from 'redux-saga/effects';
import { Creators as orderActions } from '../ducks/order';
import api from '../../services/api';
import { navigate } from '../../services/navigation';

export default function* order(action) {
  const { taste_id, size_id } = action.payload.data.pivot;
  try {
    const response = yield call(api.get, `/cart/${taste_id}/${size_id}`);
    yield put(orderActions.orderSuccess(response.data));
    navigate('ShoppingCart');
  } catch (err) {
    yield put(orderActions.orderFailure());
  }
}
