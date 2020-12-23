import { createSlice } from '@reduxjs/toolkit';

const state = {
  items: [],
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
          item.id === payload.id
            ? { ...item, isRun: !item.isRun, fixedTime: payload.fixedTime }
            : item,
        ),
      ],
    }),
    deleteItem: (state, { payload }) => ({
      ...state,
      items: [...state.items.filter(item => item.id !== payload)],
    }),
  },
});
