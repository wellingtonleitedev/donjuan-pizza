import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  userRequest: ["data"],
  userSuccess: ["data"],
  requestFailure: ["error"]
});

export const UserTypes = Types;
export default Creators;

const INITIAL_STATE = {
  data: "",
  loading: false,
  error: null
};

export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.USER_REQUEST]: state => ({ ...state, loading: true }),
  [UserTypes.USER_SUCCESS]: (state, action) => ({
    ...state,
    data: action.data,
    loading: false
  }),
  [UserTypes.REQUEST_FAILURE]: (state, action) => ({
    ...state,
    loading: true,
    error: action.error
  })
});
