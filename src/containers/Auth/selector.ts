import { RootState } from 'types';
import { AuthState } from './slice';

export const appSelector = (state: RootState): AuthState => state.containers.auth;
