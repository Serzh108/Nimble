import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { trackerSlice } from './trackerReduser';

const persistConfig = {
  key: 'root',
  storage,
};

const middleware = [
  ...getDefaultMiddleware({
    // serializableCheck: false,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const rootReducer = combineReducers({
  [trackerSlice.name]: trackerSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  // reducer: rootReducer,
  reducer: persistedReducer,
  middleware,
});

export default store;
export const persistor = persistStore(store);
