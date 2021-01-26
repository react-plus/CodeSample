import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  value: number;
}

const initialState: AppState = {
  value: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export default appSlice.reducer;
