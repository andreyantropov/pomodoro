import React from 'react';
import styles from './arrowicon.module.css';

interface ArrowIconProps {
  size?: number;
  className?: string;
}

export function ArrowIcon({ size = 16, className = styles.arrow }: ArrowIconProps) {
  return (
    <svg width={size} height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={className} id="Rectangle 2" d="M1 9L8 2L15 9" strokeWidth="2"/>
    </svg>
  );
}
