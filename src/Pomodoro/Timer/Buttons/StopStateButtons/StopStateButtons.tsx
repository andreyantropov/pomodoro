import React from 'react';
import styles from './stopstatebuttons.module.css';
import { StartButton } from '../StartButton';
import { StopButton } from '../StopButton';

export function StopStateButtons() {
  return (
    <React.Fragment>
      <StartButton />
      <StopButton />
    </React.Fragment>
  );
}
