import AsyncStorage from '@react-native-community/async-storage';
import api from './api';

export const TOKEN_KEY = '@donjuan-token';
export const isAuthenticated = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  try {
    await api.get(`/user/${token}`);
    return true;
  } catch (err) {
    return false;
  }
};

export const getToken = () => AsyncStorage.getItem(TOKEN_KEY);
export const login = token => AsyncStorage.setItem(TOKEN_KEY, token);
export const logout = () => AsyncStorage.removeItem(TOKEN_KEY);
