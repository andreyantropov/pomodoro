import React from 'react';
import styles from './navigation.module.css';
import { Icons } from '../../enums/Icons';
import { generateId } from '../../utils/generateRandomIndex';
import { NavLink } from './NavLink';

const navLinks = [
  {
    icon: Icons.Equalizer,
    text: 'Статистика',
    url: 'statistics',
  },
  {
    icon: Icons.Settings,
    text: 'Настройки',
    url: 'settings',
  },
].map(generateId);

export function Navigation() {
  return (
    <nav>
      <ul className={styles.navigationList}>
        { 
          navLinks.map(({ icon, text, url }) => (
            <NavLink 
              icon={icon}
              text={text}
              url={url}
            />
          ))
        }
      </ul>
    </nav>
  );
}
