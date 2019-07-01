/**
 * Actions Types
 */

export const Types = {
  REQUEST: 'ORDER_REQUEST',
  PUT_SUCCESS: 'ORDER_PUT_SUCCESS',
  REMOVE_SUCCESS: 'ORDER_REMOVE_SUCCESS',
  CLEAR_SUCCESS: 'ORDER_CLEAR_SUCCESS',
  FAILURE: 'ORDER_FAILURE',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function order(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.PUT_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.data],
        loading: false,
      };
    case Types.REMOVE_SUCCESS:
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload.data.id),
        loading: false,
      };
    case Types.CLEAR_SUCCESS:
      return {
        ...state,
        data: [],
        loading: false,
      };
    case Types.FAILURE:
      return { ...state, loading: true, error: true };
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

  orderPutSuccess: data => ({
    type: Types.PUT_SUCCESS,
    payload: { data },
  }),

  orderRemoveSuccess: data => ({
    type: Types.REMOVE_SUCCESS,
    payload: { data },
  }),

  orderClearSuccess: () => ({
    type: Types.CLEAR_SUCCESS,
  }),

  orderFailure: () => ({
    type: Types.FAILURE,
  }),
};
