import React, { useEffect, useRef, useState } from 'react';
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
import { Bar, getElementAtEvent } from 'react-chartjs-2';
import { Statistic } from '../../interfaces/statistic';
import { useStoreon } from 'storeon/react';
import { Events, State } from '../../store/store';

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
  const { dispatch, selectedWeek } = useStoreon<State, Events>('selectedWeek');
  const [selectedStatistics, setSelectedStatistics] = useState(getWeeklyStatistics(statistics, selectedWeek));
  const chartRef = useRef();

  let data = {
    labels,
    datasets: [
      {
        label: '',
        data: labels.map((label, index) => selectedStatistics.length ? selectedStatistics[index].tomatoes : new Array(7).fill(0)),
        backgroundColor: '#ea8a79',
      },
    ],
  };

  useEffect(() => {
    setSelectedStatistics(getWeeklyStatistics(statistics, selectedWeek));
  }, [statistics, selectedWeek]);

  function getWeeklyStatistics(data: Statistic[], weekOffset: number): Statistic[] {
    const today = new Date();
    const currentDayOfWeek = today.getDay() !== 0 ? today.getDay() - 1 : 6;
    const daysToMonday = (currentDayOfWeek + 6) % 7;
    const monday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - daysToMonday - weekOffset * 7);
    const sunday = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 6 - weekOffset * 7);
    const result: Statistic[] = [];

    for (let currentDate = monday; currentDate <= sunday; currentDate.setDate(currentDate.getDate() + 1)) {
      const currentDateString = currentDate.getDate();
      const foundData = data.find(item => item.date === currentDateString);
      const currentData: Statistic = foundData ? { ...foundData, date: currentDateString, } : { date: currentDateString, tomatoes: 0, plannedTomatoes: 0, pauses: 0, workedTime: 0, pausedTime: 0 };
      result.push(currentData);
    }
    return result;
  }

  const onClick = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (chartRef.current && event) {
      const elem = getElementAtEvent(chartRef.current, event);
      if (elem[0]) {
        dispatch('statistics/selectedDate/update', selectedStatistics[elem[0].index].date);
      }
      console.log( getElementAtEvent(chartRef.current, event) );
    }
  }

  return (
    <div className={styles.plotComponent}>
      <Bar options={options} data={data} ref={chartRef} onClick={onClick} />
    </div>
  );
}