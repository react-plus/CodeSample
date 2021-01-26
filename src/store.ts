import { combineReducers, configureStore } from '@reduxjs/toolkit';

import homeReducer from 'containers/App/slice';
import appContainerReducer from 'containers/App/slice';

const containersReducer = combineReducers({
  app: appContainerReducer,
});

const reducers = {
  containers: containersReducer,
  home: homeReducer,
};

export const store = configureStore({
  reducer: combineReducers(reducers),
});
