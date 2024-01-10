import React from 'react';
import styles from './breakpausedstatebuttons.module.css';
import { ContinueButton } from '../ContinueButton';
import { SkipButton } from '../SkipButton';

export function BreakPausedStateButtons() {
  return (
    <React.Fragment>
      <ContinueButton />
      <SkipButton />
    </React.Fragment>
  );
}
