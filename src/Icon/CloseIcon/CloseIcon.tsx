import React from 'react';
import styles from './closeicon.module.css';

interface CloseIconProps {
  size?: number;
  className?: string;
}

export function CloseIcon({ size = 24, className = styles.close }: CloseIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Frame 3">
          <path className={className} id="Description" d="M11.9115 13.8058L6.84406 18.9567L4.96166 17.0433L10.0291 11.8924L5.0675 6.84914L6.85992 5.02721L11.8215 10.0705L16.7673 5.04334L18.6497 6.95672L13.7039 11.9839L18.6655 17.0272L16.8731 18.8491L11.9115 13.8058Z"/>
      </g>
    </svg>
  );
}
