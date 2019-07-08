export const TOKEN_KEY = "@donjuan-token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY);

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = async token => {
  await localStorage.setItem(TOKEN_KEY, token);
};

export const logout = async () => {
  await localStorage.removeItem(TOKEN_KEY);
};
