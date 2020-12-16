import React from 'react';
import styles from './ItemList.module.css';

export default function ItemList() {
  return (
    <ul className={styles.list}>
      <li>No name tracker #1 00:01:32</li>
      <li>No name tracker #2 00:02:15</li>
      <li>No name tracker #3 00:03:47</li>
    </ul>
  );
}
