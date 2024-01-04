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
        styles={
          {
            control: (base, props) => ({
              ...base,
              padding: '10px 15px',
              border: props.isFocused ? 'none' : '#f4f4f4',
              borderRadius: '0px',
              outline: 'none',
              minWidth: '370px',
              backgroundColor: '#f4f4f4',
            }),
            indicatorSeparator: (base, props) => ({
              ...base,
              display: 'none',
            }),
            menu: (base, props) => ({
              ...base,
              top: '50px',
              padding: '0px',
              borderRadius: '0px',
              backgroundColor: '#f4f4f4',
            }),
            option: (base, props) => ({
              ...base,
              padding: '15px 20px',
              fontSize: '16px',
              fontWeight: '400',
              color: '#333',
              backgroundColor: props.isFocused ? '#c4c4c4' : '#f4f4f4',
            }),
            singleValue: (base, props) => ({
              ...base,
              fontSize: '16px',
              fontWeight: '400',
              color: '#333',
            }),
          }
        }
    />
  );
}
