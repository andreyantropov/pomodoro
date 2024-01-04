import React, { useState } from 'react';
import styles from './menu.module.css';
import { DropDown } from '../../../../../DropDown';
import { generateId } from '../../../../../utils/generateRandomIndex';
import { MenuItemList } from './MenuItemList';
import { Icon } from '../../../../../Icon';
import { Icons } from '../../../../../enums/Icons';
import { useStoreon } from 'storeon/react';
import { State, Events } from '../../../../../store/store';
import { Task } from '../../../../../interfaces/task';
import { Confirm } from '../../../../../Confirm';

interface MenuProps {
  task: Task;
}

export function Menu({ task }: MenuProps) {
  const { dispatch } = useStoreon<State, Events>();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const menuItems = [
    {
      icon: Icons.Increase,
      text: 'Увеличить',
      isDisabled: task.tomatoes === 4,
      OnClick: () => dispatch('tasks/update', { ...task, tomatoes: ++task.tomatoes }),
    },
    {
      icon: Icons.Decrease,
      text: 'Уменьшить',
      isDisabled: task.tomatoes === 1,
      OnClick: () => dispatch('tasks/update', { ...task, tomatoes: --task.tomatoes }),
    },
    {
      icon: Icons.Edit,
      text: 'Редактировать',
      isDisabled: false,
      OnClick: () => dispatch('tasks/update', { ...task, isEdit: true }),
    },
    {
      icon: Icons.Delete,
      text: 'Удалить',
      isDisabled: false,
      OnClick: () => { setIsConfirmOpen(true) },
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
      <Confirm isOpen={isConfirmOpen} title='Удалить задачу?' confirmBtnText='Удалить' onConfirm={ () => dispatch('tasks/delete', task) } onCancel={ () => setIsConfirmOpen(false) } />
    </div>
  );
}
