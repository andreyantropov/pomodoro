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
          (
            <div className={styles.countContainer}>
              <img src="img/tomato.svg" alt="" aria-hidden />
              <span className={styles.count}>x{tomatoes}</span>
            </div>
          ) : 
          (
            <div className={styles.countContainer}>
              <img src="img/smiling-tomato.svg" alt="" aria-hidden />
            </div>
          )
        }
        { tomatoes && (
          <div className={styles.captionContainer}>
            <span className={styles.caption}>{tomatoes} помидора</span>
          </div>
        )}
      </div>
    </div>
  );
}
