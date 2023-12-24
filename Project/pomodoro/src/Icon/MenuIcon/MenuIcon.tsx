import React from 'react';
import styles from './menuicon.module.css';

interface MenuIconProps {
  size?: number;
}

export function MenuIcon({ size = 26 }: MenuIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height="6" viewBox="0 0 26 6" fill="none">
      <circle cx="3" cy="3" r="3" fill="#c4c4c4"/>
      <circle cx="13" cy="3" r="3" fill="#c4c4c4"/>
      <circle cx="23" cy="3" r="3" fill="#c4c4c4"/>
    </svg>
  );
}
