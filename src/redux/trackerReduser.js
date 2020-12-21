import { createSlice } from '@reduxjs/toolkit';

const state = {
  items: [],
  isLoading: false,
};

export const trackerSlice = createSlice({
  name: 'tracker',
  initialState: state,
  reducers: {
    addTrackerItem: (state, { payload }) => ({
      ...state,
      items: [payload, ...state.items],
    }),
    changingIsRun: (state, { payload }) => ({
      ...state,
      items: [
        ...state.items.map(item =>
          item.id === payload ? { ...item, isRun: !item.isRun } : item,
        ),
      ],
    }),
    deleteItem: (state, { payload }) => ({
      ...state,
      items: [...state.items.filter(item => item.id !== payload)],
    }),
    resetIsLoading: (state, { payload }) => ({
      ...state,
      isLoading: false,
    }),
  },
});
