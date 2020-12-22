import { trackerSlice } from './trackerReduser';
import deltaTime from '../helpers/deltaTime';

const setTracker = data => (dispatch, getState) => {
  console.log('In Operations -> name: ', data);
  dispatch(trackerSlice.actions.addTrackerItem(data));
};

const changeIsRun = id => (dispatch, getState) => {
  const { items } = getState().tracker;
  const fixTime = items.reduce(
    (acc, item) => {
      // console.log('item.time : ', item.time);
      // console.log('deltaTime(item.time) : ', deltaTime(item.time));
      return item.id === id && item.isRun ? deltaTime(item.time) : acc;
    },
    //  ((item.id === id) ? deltaTime(item.time) : acc),
    null,
  );
  console.log('In Operations -> items: ', items);
  console.log('In Operations -> fixTime: ', fixTime);
  console.log('In Operations -> id: ', id);
  dispatch(trackerSlice.actions.changingIsRun({ id, fixedTime: fixTime }));
};

const removeItem = id => (dispatch, getState) => {
  // console.log('In Operations -> id: ', id)
  dispatch(trackerSlice.actions.deleteItem(id));
};

export { setTracker, changeIsRun, removeItem };
