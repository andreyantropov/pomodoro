import React from 'react';
import styles from './menuicon.module.css';

interface MenuIconProps {
  size?: number;
  className?: string;
}

export function MenuIcon({ size = 26, className = styles.menu }: MenuIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height="6" viewBox="0 0 26 6" fill="none">
      <circle className={className} cx="3" cy="3" r="3"/>
      <circle className={className} cx="13" cy="3" r="3"/>
      <circle className={className} cx="23" cy="3" r="3"/>
    </svg>
  );
}
