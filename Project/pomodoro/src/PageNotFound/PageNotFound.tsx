import React from 'react';
import styles from './pagenotfound.module.css';

export function PageNotFound() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <span className={styles.error}>Ошибка 404 </span><span className={styles.description}> - страница не найдена :(</span>
        </div>
      </div>
    </section>
  );
}
