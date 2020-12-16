import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { trackerSlice } from './trackerReduser';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

const rootReducer = {
  [trackerSlice.name]: trackerSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});
