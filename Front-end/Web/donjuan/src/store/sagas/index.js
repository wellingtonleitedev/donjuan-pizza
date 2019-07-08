import { all, takeLatest } from "redux-saga/effects";
import { UserTypes } from "../ducks/user";
import fetchUser from "./user";

export default function* rootSaga() {
  return yield all([takeLatest(UserTypes.USER_REQUEST, fetchUser)]);
}
