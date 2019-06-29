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
  data: [],
  loading: false,
  error: false,
  price: [],
};

export default function order(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.data],
        loading: true,
        price: [...state.price, action.payload.data.sizes[0].pivot.price],
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

  orderSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),

  orderFailure: () => ({
    type: Types.FAILURE,
  }),
};
