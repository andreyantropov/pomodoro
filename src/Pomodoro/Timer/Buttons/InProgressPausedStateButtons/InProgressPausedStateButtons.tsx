import React from 'react';
import styles from './inprogresspausedstatebuttons.module.css';
import { ContinueButton } from '../ContinueButton';
import { DoneButton } from '../DoneButton';

export function InProgressPausedStateButtons() {
  return (
    <React.Fragment>
      <ContinueButton />
      <DoneButton />
    </React.Fragment>
  );
}
