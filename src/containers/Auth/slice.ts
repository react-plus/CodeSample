import { createSlice } from '@reduxjs/toolkit';

import { login } from './thunks';

export interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: '',
};

const appSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [login.fulfilled.toString()]: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export default appSlice.reducer;
