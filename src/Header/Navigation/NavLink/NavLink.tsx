import React from 'react';
import styles from './navlink.module.css';
import { Link } from 'react-router-dom';
import { Icon } from '../../../Icon';
import { Icons } from '../../../enums/Icons';

interface NavLinkProps {
  icon: Icons;
  text: string;
  url: string;
}

export function NavLink({ icon, text, url }: NavLinkProps) {
  return (
    <li className={styles.navItem}>
      <Link to={url} className={styles.navLink} >
        <Icon name={icon} className={styles.icon} />
        {text}
      </Link>
    </li>
  );
}
