export const loginRequest = data => ({
  type: 'LOGIN_REQUEST',
  payload: { data },
});

export const loginSuccess = data => ({
  type: 'LOGIN_SUCCESS',
  payload: { data },
});

export const loginFailure = () => ({
  type: 'LOGIN_FAILURE',
});
