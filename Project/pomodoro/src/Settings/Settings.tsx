import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './settings.module.css';
import { useStoreon } from 'storeon/react';
import { Events, State } from '../store/store';

export function Settings() {
  const { dispatch, settings } = useStoreon<State, Events>('settings');
  const [tomatoTime, setTomatoTime] = useState(settings.tomato);
  const [shortBreakTime, setShortBreakTime] = useState(settings.shortBreak);
  const [longBreakTime, setLongBreakTime] = useState(settings.longBreak);
  const [additionalTime, setAdditionalTime] = useState(settings.additionalTime);

  function handleTomatoTimeChange(e: ChangeEvent<HTMLInputElement>) {
    setTomatoTime(Number(e.target.value));
  }

  function handleshortBreakTimeChange(e: ChangeEvent<HTMLInputElement>) {
    setShortBreakTime(Number(e.target.value));
  }

  function handleLongBreakTimeChange(e: ChangeEvent<HTMLInputElement>) {
    setLongBreakTime(Number(e.target.value));
  }

  function handleAdditionalTimeChange(e: ChangeEvent<HTMLInputElement>) {
    setAdditionalTime(Number(e.target.value));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch('settings/update', { tomato: tomatoTime, shortBreak: shortBreakTime, longBreak: longBreakTime, additionalTime: additionalTime });
  }

  function handleDefault() {
    setTomatoTime(25);
    setShortBreakTime(5);
    setLongBreakTime(15);
    setAdditionalTime(1);
    dispatch('settings/update', { tomato: 25, shortBreak: 5, longBreak: 15, additionalTime: 1 });
  }

  return (
    <section>
      <div className={styles.container}>
        <form className={styles.form} action="" onSubmit={handleSubmit}>
          <div className={styles.input}>
            <label className={styles.label} htmlFor="tomatoTime">Длительность помидорки (мин):</label>
            <input className={styles.control} id="tomatoTime" type="number" value={tomatoTime} min={1} max={60} onChange={handleTomatoTimeChange} required />
          </div>

          <div className={styles.input}>
            <label className={styles.label} htmlFor="shortBreakTime">Короткий перерыв (мин):</label>
            <input className={styles.control} id="shortBreakTime" type="number" value={shortBreakTime} min={1} max={60} onChange={handleshortBreakTimeChange} required />
          </div>

          <div className={styles.input}>
            <label className={styles.label} htmlFor="longBreakTime">Длинный перерыв (мин):</label>
            <input className={styles.control} id="longBreakTime" type="number" value={longBreakTime} min={1} max={60} onChange={handleLongBreakTimeChange} required />
          </div>

          <div className={styles.input}>
            <label className={styles.label} htmlFor="additionalTime">Доп. время (мин):</label>
            <input className={styles.control} id="additionalTime" type="number" value={additionalTime} min={1} max={60} onChange={handleAdditionalTimeChange} required />
          </div>

          <div className={styles.btnContainer}>
            <button className={styles.saveBtn} type="submit">Сохранить</button>
            <button className={styles.defaultBtn} onClick={handleDefault}>По умолчанию</button>
          </div>
        </form>
      </div>
    </section>
  );
}
