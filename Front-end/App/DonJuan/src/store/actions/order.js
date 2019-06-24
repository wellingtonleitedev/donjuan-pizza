export const orderRequest = data => ({
  type: 'ORDER_REQUEST',
  payload: { data },
});

export const orderSuccess = data => ({
  type: 'ORDER_SUCCESS',
  payload: { data },
});

export const orderFailure = () => ({
  type: 'ORDER_FAILURE',
});
