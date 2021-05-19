import axios, { AxiosInstance } from 'axios';
import config from 'config';
import { store } from 'store';

const instance: AxiosInstance = axios.create({
  baseURL: config.API_URL,
  headers: { 'X-Header': 'foobar' },
});

instance.interceptors.request.use(
  (config) => {
    config.headers['X-Header-Token'] = store.getState().auth.token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
