import { trackerSlice } from './trackerReduser';

const setTracker = data => (dispatch, getState) => {
  console.log('In Operations -> name: ', data);
  dispatch(trackerSlice.actions.addTrackerItem(data));
};

const changeIsRun = id => (dispatch, getState) => {
  // console.log('In Operations -> id: ', id)
  dispatch(trackerSlice.actions.changingIsRun(id));
};

const removeItem = id => (dispatch, getState) => {
  // console.log('In Operations -> id: ', id)
  dispatch(trackerSlice.actions.deleteItem(id));
};

export { setTracker, changeIsRun, removeItem };
