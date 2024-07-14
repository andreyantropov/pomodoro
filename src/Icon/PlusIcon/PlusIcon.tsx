import React from 'react';
import styles from './plusicon.module.css';

interface PlusIconProps {
  size?: number;
  className?: string;
}

export function PlusIcon({ size = 50, className = styles.plus }: PlusIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group 1203">
          <circle className={className} id="Ellipse 1" cx="25" cy="25" r="25"/>
          <path id="Description" d="M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z" fill="white"/>
      </g>
    </svg>
  );
}