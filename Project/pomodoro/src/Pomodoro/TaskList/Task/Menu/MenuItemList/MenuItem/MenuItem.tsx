import React from 'react';
import styles from './menuitem.module.css';
import { Icon } from '../../../../../../Icon';
import { Icons } from '../../../../../../enums/Icons';

interface Item {
  id: string;
  icon: Icons;
  text: string;
  OnClick: () => void;
}

export function MenuItem({ id, icon, text, OnClick }: Item) {
  return (
    <React.Fragment key={id}>
      <li className={styles.item} onClick={OnClick}>
        <Icon name={icon} />
        {text}
      </li>
    </React.Fragment>
  );
}
