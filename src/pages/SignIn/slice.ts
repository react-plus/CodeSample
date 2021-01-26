import { createSlice } from '@reduxjs/toolkit';

export interface HomeState {
  value: number;
}

const initialState: HomeState = {
  value: 0,
};

const signInSlice = createSlice({
  name: 'sign-in',
  initialState,
  reducers: {},
});

export default signInSlice.reducer;
