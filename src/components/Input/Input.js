import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import styles from './Input.module.css';
import { setTracker } from '../../redux/trackerOperations';
import { ReactComponent as EnterIcon } from '../../icons/play_circle_filled-24px.svg';

export default function Input() {
  const dispatch = useDispatch();
  const [nameItem, setNameItem] = useState('');

  const changeHandler = e => {
    // console.log('changeHandler!', e.target.value);
    setNameItem(e.target.value);
  };

  const formSubmit = e => {
    e.preventDefault();
    const time = new Date();
    console.log('formSubmit time: ', time);
    const name = nameItem ? nameItem : 'No name ' + time.toLocaleTimeString();
    console.log('formSubmit name : ', name);
    const isRun = true;
    const nameInputId = shortid.generate();
    // console.log('nameInputId = ', nameInputId);
    dispatch(setTracker({ name, time, isRun, id: nameInputId }));
    setNameItem('');
  };

  return (
    <form onSubmit={formSubmit}>
      <input
        type="text"
        value={nameItem}
        className={styles.input}
        placeholder="Enter tracker name"
        onChange={changeHandler}
      />
      <button className={styles.btn} type="submit">
        <EnterIcon width="46" height="46" fill="#3faf6c" />
      </button>
    </form>
  );
}
