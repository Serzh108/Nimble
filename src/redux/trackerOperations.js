import { trackerSlice } from './trackerReduser';

const setTracker = () => (dispatch, getState) => {
  dispatch(trackerSlice.actions.setTracker());
};

export { setTracker };
