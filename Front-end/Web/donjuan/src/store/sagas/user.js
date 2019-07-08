import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import UserActions from "../ducks/user";
import { push } from "connected-react-router";
import { login } from "../../services/auth";

export default function* fetchUser({ data }) {
  const { email, password } = data;
  try {
    const response = yield call(api.post, "/signin-web", { email, password });
    yield call(login, response.data.token);
    yield put(UserActions.userSuccess(response.data));
    yield put(push("/dashboard"));
  } catch (err) {
    if (err.message === "Request failed with status code 417") {
      yield put(
        UserActions.requestFailure("Você não possui permissão para acessar")
      );
    } else {
      yield put(
        UserActions.requestFailure(
          "Não foi possível acessar, verifique as credenciais."
        )
      );
    }
  }
}
