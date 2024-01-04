import React from 'react';
import styles from './plot.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
    },
    y: {
      position: 'right',
      min: 0,
      max: 1000,
      ticks: {
        stepSize: 500,
      },
      border: {
        display: false
      },
    },
  },
};

const labels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: '#ea8a79',
    },
  ],
};

export function Plot() {
  return (
    <div className={styles.plotComponent}>
      <Bar options={options} data={data} />
    </div>
  );
}
