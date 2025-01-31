import React from 'react';
import styles from './deleteicon.module.css';

interface DeleteIconProps {
  size?: number;
  className?: string;
}

export function DeleteIcon({ size = 18, className = styles.delete }: DeleteIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="delete" clipPath="url(#clip0_35_114)">
          <path className={className} id="Vector" d="M12 6.75V14.25H6V6.75H12ZM10.875 2.25H7.125L6.375 3H3.75V4.5H14.25V3H11.625L10.875 2.25ZM13.5 5.25H4.5V14.25C4.5 15.075 5.175 15.75 6 15.75H12C12.825 15.75 13.5 15.075 13.5 14.25V5.25Z"/>
      </g>
      <defs>
          <clipPath id="clip0_35_114">
              <rect width={size} height={size} fill="white"/>
          </clipPath>
      </defs>
    </svg>
  );
}
