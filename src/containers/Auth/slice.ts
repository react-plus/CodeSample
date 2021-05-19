import { createSlice } from '@reduxjs/toolkit';

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
});

export default appSlice.reducer;
