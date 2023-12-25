import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { Icon } from '../Icon';
import { Icons } from '../enums/Icons';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link to="tasks" >
            <img src="/img/logo.svg" alt="Логотип Pomodoro" />
          </Link>

          <nav>
            <ul className={styles.navigationList}>
              <li>
                <Link to="statistics" className={styles.navigationLink} >
                  <Icon name={Icons.Equalizer} />
                  Статистика
                </Link>
              </li>
                
              <li>
                <Link to="settings" className={styles.navigationLink} >
                  <Icon name={Icons.Settings} />
                  Настройки
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
