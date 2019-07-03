import { createReducer, createActions } from 'reduxsauce';
/**
 * Actions Types & Creators
 */

const { Types, Creators } = createActions({
  setOrderRequest: ['data'],
  setOrderSuccess: ['data'],
  removeOrderRequest: ['data'],
  removeOrderSuccess: ['data'],
  clearOrderRequest: null,
  clearOrderSuccess: null,
  orderFailure: null,
});

export const OrderTypes = Types;
export default Creators;

/**
 * Reducers
 */

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_ORDER_REQUEST]: state => ({ ...state, loading: true }),
  [Types.SET_ORDER_SUCCESS]: (state, action) => ({
    ...state,
    data: [...state.data, action.data],
    loading: false,
  }),
  [Types.REMOVE_ORDER_REQUEST]: state => ({ ...state, loading: true }),
  [Types.REMOVE_ORDER_SUCCESS]: (state, action) => ({
    ...state,
    data: state.data.filter(item => item.id !== action.data.id),
    loading: false,
  }),
  [Types.CLEAR_ORDER_REQUEST]: state => ({ ...state, loading: true }),
  [Types.CLEAR_ORDER_SUCCESS]: state => ({
    ...state,
    data: [],
    loading: false,
  }),
  [Types.ORDER_FAILURE]: state => ({ ...state, loading: false, error: true }),
});
