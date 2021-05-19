import { createSlice } from '@reduxjs/toolkit';

import { login } from './thunks';

export interface AuthState {
  token: string;
  user?: { email: string; firstName: string; lastName: string };
}

const initialState: AuthState = {
  token: '',
  user: {
    email: '',
    firstName: '',
    lastName: '',
  },
};

const appSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = '';
      state.user = {
        email: '',
        firstName: '',
        lastName: '',
      };
    },
  },
  extraReducers: {
    [login.fulfilled.toString()]: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

export const { logout } = appSlice.actions;

export default appSlice.reducer;
