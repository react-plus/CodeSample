import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import homeReducer from 'containers/App/slice';
import appContainerReducer from 'containers/App/slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const containersReducer = combineReducers({
  app: appContainerReducer,
});

const reducers = {
  containers: containersReducer,
  home: homeReducer,
};

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store);

export { store, persistor };
