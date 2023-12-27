import React from 'react';
import styles from './menu.module.css';
import { DropDown } from '../../../../DropDown';
import { generateId } from '../../../../utils/generateRandomIndex';
import { MenuItemList } from './MenuItemList';
import { Icon } from '../../../../Icon';
import { Icons } from '../../../../enums/Icons';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../../store/store';

interface MenuProps {
  id: number;
  text: string;
  isEdit: boolean;
  tomatoes: number;
}

export function Menu({ id, text, isEdit, tomatoes }: MenuProps) {
  const { dispatch } = useStoreon<State, Events>();

  const menuItems = [
    {
      icon: Icons.Increase,
      text: 'Увеличить',
      OnClick: () => dispatch('tasks/update', { id: id, text: text, isEdit: isEdit, tomatoes: ++tomatoes }),
    },
    {
      icon: Icons.Decrease,
      text: 'Уменьшить',
      OnClick: () => dispatch('tasks/update', { id: id, text: text, isEdit: isEdit, tomatoes: --tomatoes }),
    },
    {
      icon: Icons.Edit,
      text: 'Редактировать',
      OnClick: () => dispatch('tasks/update', { id: id, text: text, isEdit: true, tomatoes: tomatoes }),
    },
    {
      icon: Icons.Delete,
      text: 'Удалить',
      OnClick: () => dispatch('tasks/delete', { id: id, text: text, isEdit, tomatoes: tomatoes }),
    },
  ].map(generateId);

  return (
    <div className={styles.menuComponent}>
      <DropDown
        button={
          <button className={styles.dropdownBtn}>
            <Icon name={Icons.Menu} />
          </button>
        }
      >
        <div className={styles.dropdown}>
          <MenuItemList items={menuItems} />
        </div>
      </DropDown>
    </div>
  );
}
