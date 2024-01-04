import React from 'react';
import styles from './stopicon.module.css';

interface StopIconProps {
  size?: number;
  className?: string;
}

export function StopIcon({ size = 130, className = styles.stop }: StopIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="alarm-clock">
          <g id="Group 1241">
              <path className={className} id="Vector" d="M64.3158 118.632C94.3136 118.632 118.632 94.3136 118.632 64.3158C118.632 34.318 94.3136 10 64.3158 10C34.318 10 10 34.318 10 64.3158C10 94.3136 34.318 118.632 64.3158 118.632Z" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              <path className={className} id="Vector_2" d="M28 27L102 101" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
      </g>
    </svg>
  );
}
