import React, { useState } from 'react';
import styles from './interval.module.css';
import Select, { ActionMeta } from 'react-select';

type Option = {
  value: string;
  label: string;
}

type SingleValue<Option> = Option | null;

const options: Option[] = [
  { value: '0', label: 'Эта неделя' },
  { value: '1', label: 'Прошлая неделя' },
  { value: '2', label: '2 недели назад' },
];

export function Interval() {
  const [selectedOption, setSelectedOption] = useState<SingleValue<Option> | null>(options[0]);

  const handleChange = (option: SingleValue<Option> | null) => {
    setSelectedOption(option);
  };

  return (
    <Select
        value={selectedOption}
        onChange={option => handleChange(option)}
        options={options}
    />
  );
}
