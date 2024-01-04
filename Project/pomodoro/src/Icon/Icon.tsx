import React from 'react';
import styles from './icon.module.css';
import { EqualizerIcon } from './EqualizerIcon';
import { SettingsIcon } from './SettingsIcon';
import { EditIcon } from './EditIcon';
import { DeleteIcon } from './DeleteIcon';
import { MenuIcon } from './MenuIcon';
import { PlusIcon } from './PlusIcon';
import { IncreaseIcon } from './IncreaseIcon';
import { DecreaseIcon } from './DecreaseIcon';
import { Icons } from '../enums/Icons';
import { ArrowIcon } from './ArrowIcon';
import { FocusIcon } from './FocusIcon';
import { ClockIcon } from './ClockIcon';
import { StopIcon } from './StopIcon';
import { CloseIcon } from './CloseIcon';

interface IconProps {
  name: Icons;
  size?: number;
  className?: string;
}

export function Icon({ name, size, className }: IconProps) {
  const renderSwitch = (param: string) => {
    switch(param) {
      case Icons.Equalizer:
        return <EqualizerIcon size={size} className={className} />;
      case Icons.Settings:
        return <SettingsIcon size={size} className={className} />;
      case Icons.Edit:
        return <EditIcon size={size} className={className} />;
      case Icons.Delete:
        return <DeleteIcon size={size} className={className} />;
      case Icons.Menu:
        return <MenuIcon size={size} className={className} />;
      case Icons.Plus:
        return <PlusIcon size={size} className={className} />;
      case Icons.Increase:
        return <IncreaseIcon size={size} className={className} />;
      case Icons.Decrease:
        return <DecreaseIcon size={size} className={className} />;
      case Icons.Arrow:
        return <ArrowIcon size={size} className={className} />;
      case Icons.Focus:
        return <FocusIcon size={size} className={className} />;
      case Icons.Clock:
        return <ClockIcon size={size} className={className} />;
      case Icons.Stop:
        return <StopIcon size={size} className={className} />;
      case Icons.Close:
        return <CloseIcon size={size} className={className} />;
      default:
        return <div></div>;
    }
  }

  return (
    <>
      {renderSwitch(name)}
    </>
  );
}
