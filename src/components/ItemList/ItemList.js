import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeIsRun, removeItem } from '../../redux/trackerOperations';
// import moment from 'moment';
import Button from '../Button/Button';
import deltaTime from '../../helpers/deltaTime';
import { ReactComponent as PauseIcon } from '../../icons/pause_circle_outline-24px.svg';
import { ReactComponent as RemoveIcon } from '../../icons/remove_circle_outline-24px.svg';
import { ReactComponent as PlayIcon } from '../../icons/play_circle_outline-24px.svg';
import styles from './ItemList.module.css';

export default function ItemList() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.tracker.items);
  // console.log('items = ', items);
  // console.log('new Date() = ', new Date());

  const tempDate = items[0]?.time;
  // console.log('tempDate = ', tempDate);

  const intervalId = useRef();
  // const [time, setTime] = useState(new Date());
  const [time, setTime] = useState(tempDate);
  useEffect(() => {
    intervalId.current = setInterval(() => setTime(new Date()), 1000);
    return () => () => clearInterval(intervalId.current);
  }, []);

  const clickPauseHandler = e => {
    const li = e.target.closest('LI');
    dispatch(changeIsRun(li.id));
  };

  const clickRemoveHandler = e => {
    const li = e.target.closest('LI');
    dispatch(removeItem(li.id));
  };

  // const showTime = () => {
  //   const startTime = items[0].time;
  //   console.log('startTime = ', startTime);
  //   const nowTime = new Date();
  //   console.log('nowTime = ', nowTime);
  //   const deltaTime = nowTime - startTime;
  //   console.log('deltaTime = ', deltaTime);
  //   // const test = moment().startOf('hour').fromNow();
  //   const test = moment().format('h:mm:ss a');
  //   console.log('test = ', test);
  // };
  // showTime();
  // console.log('deltaTime = ', moment().startOf(tempDate).fromNow());
  // const x = moment() - tempDate;
  // =-=-==-=-=
  // const deltaTime = tempDate => {
  //   const delta = (new Date() - tempDate) / 1000;
  //   // const x = (time - tempDate) / 1000;
  //   const h = toTwoDigit(Math.floor(delta / 3600));
  //   const min = toTwoDigit(Math.floor(delta / 60 - h * 60));
  //   const sec = toTwoDigit(Math.floor(delta % 60));
  //   const fullTime = `${h} : ${min} : ${sec}`;
  //   return fullTime;
  // };

  // const toTwoDigit = data => data.toString().padStart(2, '0');
  // =-=-==-=-=
  // console.log(`${h} : ${min} : ${sec}`);
  // console.log('moment() = ', moment());
  // console.log('tempDate = ', tempDate);
  // console.log('x = ', x/1000);
  // console.log('deltaTime1 = ', moment(x).format("hh:mm:ss"));
  // console.log('deltaTime2 = ', moment().from(tempDate));

  return (
    <>
      <h2>Текущее время: {time && time.toLocaleTimeString()}</h2>
      <h2>Разница времени: {deltaTime(tempDate)}</h2>
      <ul className={styles.list}>
        {items.map(item => (
          <li key={item.name} id={item.id} className={styles.listItem}>
            <span>{item.name}</span>
            <span>{item.isRun ? deltaTime(item.time) : item.fixedTime}</span>
            <div>
              {item.isRun ? (
                <Button onBtnClick={clickPauseHandler}>
                  <PauseIcon width="24" height="24" fill="#000" />
                </Button>
              ) : (
                <Button onBtnClick={clickPauseHandler}>
                  <PlayIcon width="24" height="24" fill="#000" />
                </Button>
              )}
              <Button onBtnClick={clickRemoveHandler}>
                <RemoveIcon width="24" height="24" fill="#f00" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
