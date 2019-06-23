import { all, takeLatest, call, put } from 'redux-saga/effects'
import * as loginActions from '../actions/login';

function* login(action) {
  const { data } = action.payload
  try {
    yield call(api.post, 'signin', data)

    yield put(loginActions.loginSuccess(data))

    // login(response.data.token);
    // navigate('TypeSelect');
  } catch (err) {
    yield put(loginActions.loginFailure())
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest('LOGIN_REQUEST', login)
  ])
}
