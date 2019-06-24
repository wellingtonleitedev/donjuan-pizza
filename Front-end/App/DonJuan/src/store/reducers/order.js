const INITIAL_STATE = {
  loading: false,
  error: false,
};

export default function order(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ORDER_SUCCESS':
      return { ...state, ...action.payload.data, loading: true };
    case 'ORDER_FAILURE':
      return { ...state, loading: true, error: false };
    default:
      return state;
  }
}
