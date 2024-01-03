import React from 'react';
import styles from './tomato.module.css';

export function Tomato() {
  return (
    <div className={styles.tomatoComponent}>
      <div className={styles.tomatoes}>
        <img src="img/smiling-tomato.svg" alt="" aria-hidden />
      </div>
    </div>
  );
}
