import { RootState } from 'types';
import { AuthState } from './slice';

export const authSelector = (state: RootState): AuthState => state.auth;
