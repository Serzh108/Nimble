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
    setNameItem(e.target.value);
  };

  const formSubmit = e => {
    e.preventDefault();
    const time = new Date();
    const name = nameItem
      ? nameItem
      : 'No name tracker # ' + time.toLocaleTimeString();
    const isRun = true;
    const nameInputId = shortid.generate();
    dispatch(
      setTracker({ name, time, isRun, id: nameInputId, fixedTime: null }),
    );
    setNameItem('');
  };

  return (
    <form className={styles.form} onSubmit={formSubmit}>
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
