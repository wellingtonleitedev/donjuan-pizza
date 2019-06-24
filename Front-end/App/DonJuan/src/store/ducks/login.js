/**
 * Action Types
 */

export const Types = {
  REQUEST: 'LOGIN_REQUEST',
  SUCCESS: 'LOGIN_SUCCESS',
  FAILURE: 'LOGIN_FAILURE',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      console.tron.log('HELLO', action.payload);
      return { ...state, data: { ...action.payload.data }, loading: false };
    case Types.FAILURE:
      console.tron.log('HELLO FAILURE', action.payload);
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

/**
 * Actions Creators
 */

export const Creators = {
  loginRequest: data => ({
    type: Types.REQUEST,
    payload: { data },
  }),

  loginSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),

  loginFailure: () => ({
    type: Types.FAILURE,
  }),
};
