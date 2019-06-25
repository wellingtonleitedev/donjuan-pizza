import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';
import { Creators as orderActions } from '../ducks/order';
import api from '../../services/api';

function* order(action) {
  const { data } = action.payload;
  try {
    const response = yield call(api.post, '/cart', {
      size_id: data.id,
      taste_id: data.pivot.taste_id,
      price: data.pivot.price,
    });

    yield put(orderActions.orderSuccess(response.data));
  } catch (err) {
    yield put(orderActions.orderFailure());
  }
}

export default function* rootSaga() {
  return yield all([takeLatest('ORDER_REQUEST', order)]);
}
