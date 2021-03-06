import { trackerSlice } from './trackerReduser';
import deltaTime from '../helpers/deltaTime';

const setTracker = data => (dispatch, getState) => {
  dispatch(trackerSlice.actions.addTrackerItem(data));
};

const changeIsRun = id => (dispatch, getState) => {
  const { items } = getState().tracker;
  const currentDate = new Date();
  // console.log('currentDate = ', currentDate);
  const fixTime = items.reduce(
    (acc, item) =>
      item.id === id && item.isRun ? deltaTime(item.time, item.fixedTime) : acc,
    0,
  );
  // console.log('fixTime = ', fixTime);
  dispatch(
    trackerSlice.actions.changingIsRun({
      id,
      time: currentDate,
      fixedTime: fixTime,
    }),
  );
};

const removeItem = id => (dispatch, getState) => {
  dispatch(trackerSlice.actions.deleteItem(id));
};

export { setTracker, changeIsRun, removeItem };
