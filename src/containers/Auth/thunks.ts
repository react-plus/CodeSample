import { createAsyncThunk } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';

import { authService } from 'services';
import { LoginResponse, LoginParamsRequest, RegisterResponse, RegisterParamsRequest, User } from 'types';

export const login = createAsyncThunk<LoginResponse, LoginParamsRequest>('auth/login', async (params) => {
  const { data } = await authService.login(params);
  if (!data.success) {
    throw new Error('Login invalid');
  }
  const decoded: User = jwt_decode(data.token);
  return {
    ...data,
    user: {
      email: decoded.email,
      firstName: decoded.firstName,
      lastName: decoded.lastName,
    },
  };
});

export const register = createAsyncThunk<RegisterResponse, RegisterParamsRequest>('auth/register', async (params) => {
  const { data } = await authService.register(params);
  if (!data.success) {
    throw new Error('Register invalid');
  }
  return data;
});
