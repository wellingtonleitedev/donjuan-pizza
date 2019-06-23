const INITIAL_STATE = {
  loading: false,
  error: false
}

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, ...action.payload.data, loading: true }
    case 'LOGIN_FAILURE':
      return { ...state, loading: true, error: true }
    default:
      return state
  }
}
