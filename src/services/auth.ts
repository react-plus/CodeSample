import { AxiosInstance, AxiosPromise } from 'axios';
import { LoginParamsRequest, LoginResponse, RegisterParamsRequest, RegisterResponse } from 'types';

export default class AuthService {
  private readonly axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  login = (params: LoginParamsRequest): AxiosPromise<LoginResponse> => {
    return this.axios.post('/login', params);
  };

  register = (params: RegisterParamsRequest): AxiosPromise<RegisterResponse> => {
    return this.axios.post('/register', params);
  };
}
