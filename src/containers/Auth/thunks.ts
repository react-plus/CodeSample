import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from 'services';
import { LoginResponse, LoginParamsRequest } from 'types';

export const login = createAsyncThunk<LoginResponse, LoginParamsRequest>('auth/login', async (params) => {
  const { data } = await authService.login(params);
  if (!data.success) {
    throw new Error('Login invalid');
  }
  return data;
});
