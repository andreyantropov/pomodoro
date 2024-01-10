import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './settings.module.css';
import { useStoreon } from 'storeon/react';
import { Events, State } from '../store/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MIN } from '../constants/time';
import { Input } from './Input';
import { Buttons } from './Buttons';

export function Settings() {
  const { dispatch, settings } = useStoreon<State, Events>('settings');
  const [tomatoTime, setTomatoTime] = useState(settings.workTime / MIN);
  const [shortBreakTime, setShortBreakTime] = useState(settings.shortBreak / MIN);
  const [longBreakTime, setLongBreakTime] = useState(settings.longBreak / MIN);
  const [additionalTime, setAdditionalTime] = useState(settings.additionalTime / MIN);

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
    dispatch('settings/update', { workTime: tomatoTime * MIN, shortBreak: shortBreakTime * MIN, longBreak: longBreakTime * MIN, additionalTime: additionalTime * MIN });
    
    toast("Настройки успешно сохранены");
  }

  function handleDefault() {
    setTomatoTime(25);
    setShortBreakTime(5);
    setLongBreakTime(15);
    setAdditionalTime(1);
    dispatch('settings/update', { workTime: 25 * MIN, shortBreak: 5 * MIN, longBreak: 15 * MIN, additionalTime: 1 * MIN });
  }

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <form className={styles.form} action="" onSubmit={handleSubmit}>
            <Input label='Длительность помидорки (мин):' id='tomatoTime' value={tomatoTime.toString()} OnChange={handleTomatoTimeChange} />
            <Input label='Короткий перерыв (мин):' id='shortBreakTime' value={shortBreakTime.toString()} OnChange={handleshortBreakTimeChange} />
            <Input label='Длинный перерыв (мин):' id='longBreakTime' value={longBreakTime.toString()} OnChange={handleLongBreakTimeChange} />
            <Input label='Доп. время (мин):' id='additionalTime' value={additionalTime.toString()} OnChange={handleAdditionalTimeChange} />
            <Buttons OnDefaultClick={handleDefault} />
          </form>
        </div>
      </div>
      <ToastContainer
        toastStyle={{ padding: "24px", fontSize: "20px", lineHeight: "18px", color: "#fff", backgroundColor: "#a8b64f" }}
        position="top-right"
        autoClose={5000}
        draggable={false}
        theme="colored"
        hideProgressBar
        closeOnClick
      />
    </section>
  );
}
