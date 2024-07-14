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
import { useStoreon } from 'storeon/react';
import { Events, State } from '../../store/store';
import { useWeekStat } from '../../hooks/useWeekStat';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

export function Plot() {
  const { dispatch } = useStoreon<State, Events>();
  const [weekStat] = useWeekStat();
  const [maxTomatoes, setMaxTomatoes] = useState(0);
  const ref = useRef();

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
        max: maxTomatoes,
        ticks: {
          stepSize: Math.round(maxTomatoes / 4),
        },
        border: {
          display: false
        },
      },
    },
  };

  let data = {
    labels,
    datasets: [
      {
        label: '',
        data: labels.map((label, index) => weekStat.length ? weekStat[index].tomatoes : new Array(7).fill(0)),
        minBarLength: 5,
        backgroundColor: '#ea8a79',
      },
    ],
  };

  useEffect(() => {
    let maxTomatoesStat = weekStat.reduce((acc, curr) => acc.tomatoes > curr.tomatoes ? acc : curr);
    setMaxTomatoes(maxTomatoesStat.tomatoes);
  }, [weekStat]);

  const onClick = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (ref.current && event) {
      const elem = getElementAtEvent(ref.current, event);
      if (elem[0]) {
        dispatch('statistics/selectedDate/update', weekStat[elem[0].index].date);
      }
    }
  }

  return (
    <div className={styles.plotComponent}>
      <Bar options={options} data={data} ref={ref} onClick={onClick} />
    </div>
  );
}