import { RootState } from 'types';
import { AppState } from './slice';

export const appSelector = (state: RootState): AppState => state.containers.app;
