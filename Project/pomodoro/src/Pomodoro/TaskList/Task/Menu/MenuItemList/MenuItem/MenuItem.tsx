import React from 'react';
import styles from './menuitem.module.css';
import { Icon } from '../../../../../../Icon';
import { Icons } from '../../../../../../enums/Icons';
import classNames from 'classnames';

interface Item {
  id: string;
  icon: Icons;
  text: string;
  isDisabled?: boolean;
  OnClick: () => void;
}

export function MenuItem({ id, icon, text, isDisabled = false, OnClick }: Item) {
  const menuItemClasses = classNames(
    styles.item,
    { [styles.disabled]: isDisabled },
  );
  const noop = () => {};
  
  return (
    <React.Fragment key={id}>
      <li className={menuItemClasses} onClick={!isDisabled ? OnClick : noop}>
        <Icon name={icon} />
        {text}
      </li>
      
    </React.Fragment>
  );
}
