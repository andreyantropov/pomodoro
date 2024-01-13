import React from 'react';
import styles from './inprogressstatebuttons.module.css';
import { PauseButton } from '../PauseButton';
import { StopButton } from '../StopButton';

export function InProgressStateButtons() {
  return (
    <React.Fragment>
      <PauseButton />
      <StopButton />
    </React.Fragment>
  );
}
