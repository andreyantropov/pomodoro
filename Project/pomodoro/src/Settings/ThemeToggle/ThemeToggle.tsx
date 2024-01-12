import React from 'react';
import styles from './themetoggle.module.css';
import Switch from "react-switch";

interface ThemeToggleProps {
  checked: boolean;
  OnChange: () => void;
}

export function ThemeToggle({ checked, OnChange }: ThemeToggleProps) {
  return (
    <label className={styles.themeToggle}>
      <Switch checked={checked} uncheckedIcon={false} checkedIcon={false} offColor='#999' onColor='#a8b64f' activeBoxShadow='0 0 2px 3px #a1ab5f' onChange={() => OnChange()} />
      <span className={styles.label}>Темная тема</span>
    </label>
  );
}
