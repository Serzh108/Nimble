import { createSlice } from '@reduxjs/toolkit';

const state = {
  items: [],
};

export const trackerSlice = createSlice({
  name: 'tracker',
  initialState: state,
  redusers: {
    setTracker: (state, { payload }) => ({
      ...state,
      items: payload,
    }),
  },
});
