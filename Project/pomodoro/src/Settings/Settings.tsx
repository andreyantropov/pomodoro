import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './settings.module.css';
import { useStoreon } from 'storeon/react';
import { Events, State } from '../store/store';

export function Settings() {
  const { dispatch, settings } = useStoreon<State, Events>('settings');
  const [tomatoTime, setTomatoTime] = useState(settings.tomato / 60_000);
  const [shortBreakTime, setShortBreakTime] = useState(settings.shortBreak / 60_000);
  const [longBreakTime, setLongBreakTime] = useState(settings.longBreak / 60_000);
  const [additionalTime, setAdditionalTime] = useState(settings.additionalTime / 60_000);

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
    dispatch('settings/update', { tomato: tomatoTime * 60_000, shortBreak: shortBreakTime * 60_000, longBreak: longBreakTime * 60_000, additionalTime: additionalTime * 60_000 });
  }

  function handleDefault() {
    setTomatoTime(25);
    setShortBreakTime(5);
    setLongBreakTime(15);
    setAdditionalTime(1);
    dispatch('settings/update', { tomato: 25 * 60_000, shortBreak: 5 * 60_000, longBreak: 15 * 60_000, additionalTime: 1 * 60_000 });
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
