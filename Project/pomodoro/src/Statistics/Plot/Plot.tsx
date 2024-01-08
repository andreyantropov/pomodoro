import React, { useEffect, useState } from 'react';
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
import { Statistic } from '../../interfaces/statistic';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"bar"> = {
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
      max: 10,
      ticks: {
        stepSize: 2,
      },
      border: {
        display: false
      },
    },
  },
};

const labels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

interface PlotProps {
  statistics: Statistic[];
}

export function Plot({ statistics }: PlotProps) {
  const [selectedStatistics, setSelectedStatistics] = useState( getWeeklyStatistics(statistics) );

  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: labels.map((label, index) => selectedStatistics[index].tomatoes),
        backgroundColor: '#ea8a79',
      },
    ],
  };

  useEffect(() => {
    setSelectedStatistics( getWeeklyStatistics(statistics) );
  }, [statistics]);

  function getWeeklyStatistics(data: Statistic[]): Statistic[] {
    const today = new Date();
    const currentDayOfWeek = today.getDay() !== 0 ? today.getDay() - 1 : 6;
    const daysToMonday = (currentDayOfWeek + 6) % 7;
    const monday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - daysToMonday);
    const sunday = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 6);
    const result: Statistic[] = [];
    
    for (let currentDate = monday; currentDate <= sunday; currentDate.setDate(currentDate.getDate() + 1)) {
      const currentDateString = currentDate.getDate();
      const foundData = data.find(item => item.date === currentDateString);
      const currentData: Statistic = foundData ? { ...foundData, date: currentDateString, } : { date: currentDateString, tomatoes: 0, plannedTomatoes: 0, pauses: 0, workedTime: 0, pausedTime: 0 };
      result.push(currentData);
    }
    
    return result;
  }

  return (
    <div className={styles.plotComponent}>
      <Bar options={options} data={data} />
    </div>
  );
}
