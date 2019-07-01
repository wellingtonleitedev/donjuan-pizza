import axios from 'axios';
import { getToken } from './auth';
import { URLS } from '../constants'

const api = axios.create({
  baseURL: URLS.BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const token = await getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
