import AsyncStorage from '@react-native-community/async-storage';
import api from './api';

export const TOKEN_KEY = '@donjuan-token';
export const isAuthenticated = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  try {
    const user = await api.get(`/user/${token}`);
    if (!user) {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
};

export const getToken = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);

  return token;
};

export const login = async (token) => {
  await AsyncStorage.setItem(TOKEN_KEY, token);
};

export const logout = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
};
