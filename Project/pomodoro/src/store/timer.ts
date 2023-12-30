import { StoreonModule } from "storeon";
import { Timer, Status } from "../interfaces/timer";

export interface TimerState {
    timer: Timer;
}

export interface TimerEvents {
    'timer/time/set': number;
    'timer/tomatoes/set': number;
    'timer/status/set': Status;
    'timer/isrunning/set': boolean;
}

export const timerModule: StoreonModule<TimerState, TimerEvents> = store => {
    store.on('@init', () => ({ timer: { time: 1_500_000, tomatoes: 1, status: 'stop', isRunning: false } }));

    store.on('timer/time/set', ({ timer }, updTime) => {
        return { timer: {...timer, time: updTime} };
    });
    store.on('timer/tomatoes/set', ({ timer }, updTomatoes) => {
        return { timer: {...timer, tomatoes: updTomatoes} };
    });
    store.on('timer/status/set', ({ timer }, updStatus) => {
        return { timer: {...timer, status: updStatus} };
    });
    store.on('timer/isrunning/set', ({ timer }, updIsRunning) => {
        return { timer: {...timer, isRunning: updIsRunning} };
    });
}