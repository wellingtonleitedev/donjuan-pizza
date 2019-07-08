import { combineReducers } from "redux";
import { reducer as user } from "./user";
import { connectRouter } from "connected-react-router";
import history from "../../routes/history";

export default combineReducers({
  user,
  router: connectRouter(history)
});
