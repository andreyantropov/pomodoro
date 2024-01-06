import React from 'react';
import styles from './tomato.module.css';

interface TomatoProps {
  tomatoes?: number;
}

export function Tomato({ tomatoes }: TomatoProps) {
  return (
    <div className={styles.tomatoComponent}>
      <div className={styles.tomatoes}>
        { tomatoes ? 
          (<span>{tomatoes}</span>) : 
          (<img src="img/smiling-tomato.svg" alt="" aria-hidden />
        )}
      </div>
    </div>
  );
}
