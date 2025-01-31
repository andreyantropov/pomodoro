import React from 'react';
import styles from './equalizericon.module.css';

interface EqualizerIconProps {
  size?: number;
  className?: string;
}

export function EqualizerIcon({ size = 24, className = styles.equalizer }: EqualizerIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="equalizer" clipPath="url(#clip0_23511_232)">
          <path className={className} id="Vector" d="M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z"/>
      </g>
      <defs>
          <clipPath id="clip0_23511_232">
              <rect width={size} height={size} fill="white"/>
          </clipPath>
      </defs>
    </svg>
  );
}
