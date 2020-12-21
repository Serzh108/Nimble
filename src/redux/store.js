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

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
