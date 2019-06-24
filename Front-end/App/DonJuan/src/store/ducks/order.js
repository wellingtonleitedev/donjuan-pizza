/**
 * Actions Types
 */

export const Types = {
  REQUEST: 'ORDER_REQUEST',
  SUCCESS: 'ORDER_SUCCESS',
  FAILURE: 'ORDER_FAILURE',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  loading: false,
  error: false,
};

export default function order(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return { ...state, ...action.payload.data, loading: true };
    case Types.FAILURE:
      return { ...state, loading: true, error: false };
    default:
      return state;
  }
}

/**
 * Actions Creators
 */

export const Creators = {
  orderRequest: data => ({
    type: Types.REQUEST,
    payload: { data },
  }),

  orderSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),

  orderFailure: () => ({
    type: Types.FAILURE,
  }),
};
