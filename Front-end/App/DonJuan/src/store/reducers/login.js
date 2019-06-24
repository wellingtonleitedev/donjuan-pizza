const INITIAL_STATE = {
  data: {},
  loading: false,
  error: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.tron.log('HELLO', action.payload);
      return { ...state, data: { ...action.payload.data }, loading: true };
    case 'LOGIN_FAILURE':
      console.tron.log('HELLO FAILURE', action.payload);
      return { ...state, loading: true, error: true };
    default:
      return state;
  }
}
