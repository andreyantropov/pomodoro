import React from 'react';
import styles from './menuitemlist.module.css';
import { MenuItem } from './MenuItem';

interface Item {
  id: string;
  icon: string;
  text: string;
  OnClick: () => void;
}

interface MenuItemListProps {
  items: Item[];
}

export function MenuItemList({ items }: MenuItemListProps) {
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
