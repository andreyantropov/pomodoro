import React from 'react';
import styles from './menuitemlist.module.css';
import { MenuItem } from './MenuItem';

interface IItem {
  id: string;
  icon: string;
  text: string;
  OnClick: () => void;
}

interface IMenuItemListProps {
  items: IItem[];
}

export function MenuItemList({ items }: IMenuItemListProps) {
  return (
    <ul className={styles.menuItemsList}>
      { items.map(({ id, icon, text, OnClick }) => (
        <MenuItem 
          key={id}
          id={id}
          icon={icon}
          text={text}
          OnClick={OnClick}
        />
      )) }
    </ul>
  );
}
