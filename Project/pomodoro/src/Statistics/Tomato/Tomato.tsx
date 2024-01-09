import React from 'react';
import styles from './tomato.module.css';
import { useSelectedStat } from '../../hooks/useSelectedStat';

export function Tomato() {
  const [ selectedStat ] = useSelectedStat();

  return (
    <div className={styles.tomatoComponent}>
      <div className={styles.tomatoes}>
        { selectedStat ? 
          (
            <div className={styles.countContainer}>
              <img src="img/tomato.svg" alt="" aria-hidden />
              <span className={styles.count}>x{selectedStat.tomatoes}</span>
            </div>
          ) : 
          (
            <div className={styles.countContainer}>
              <img src="img/smiling-tomato.svg" alt="" aria-hidden />
            </div>
          )
        }
        { selectedStat && (
          <div className={styles.captionContainer}>
            <span className={styles.caption}>{selectedStat.tomatoes} помидора</span>
          </div>
        )}
      </div>
    </div>
  );
}
