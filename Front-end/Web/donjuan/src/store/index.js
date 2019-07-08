import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Reactotron from "../config/ReactotronConfig";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./ducks";
import rootSaga from "./sagas";
import history from "../routes/history";

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMiddleware
    : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware, routerMiddleware(history));

const composer =
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(...middlewares),
        Reactotron.createEnhancer()
      )
    : compose(applyMiddleware(...middlewares));

export default createStore(rootReducer, composer);

sagaMiddleware.run(rootSaga);
