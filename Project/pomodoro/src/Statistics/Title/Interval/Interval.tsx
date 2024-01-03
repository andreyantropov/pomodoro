import React from 'react';
import styles from './interval.module.css';

export function Interval() {
  return (
    <select name="interval" id="interval">
      <option value="0">Эта неделя</option>
      <option value="1">Прошлая неделя</option>
      <option value="2">2 недели назад</option>
    </select>
  );
}
