import React from 'react';
import styles from './breakstatebuttons.module.css';
import { PauseButton } from '../PauseButton';
import { SkipButton } from '../SkipButton';

export function BreakStateButtons() {
  return (
    <React.Fragment>
      <PauseButton />
      <SkipButton />
    </React.Fragment>
  );
}
