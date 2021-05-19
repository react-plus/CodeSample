import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from 'services';
import { LoginResponse, LoginParamsRequest } from 'types';

export const login = createAsyncThunk<LoginResponse, LoginParamsRequest>('auth/login', async (params) => {
  //TODO call api
  const response = await authService.login(params);
  console.log(response);
  return {
    data: null,
  };
});
