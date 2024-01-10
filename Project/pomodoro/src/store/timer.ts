import { StoreonModule } from "storeon";
import { Timer } from "../interfaces/timer";
import { TimerStatus } from "../enums/TimerStatus";

export interface TimerState {
    timer: Timer;
}

export interface TimerEvents {
    'timer/time/set': number;
    'timer/tomatoes/set': number;
    'timer/status/set': TimerStatus;
}

export const timerModule: StoreonModule<TimerState, TimerEvents> = store => {
    store.on('@init', () => ({ timer: { time: 1_500_000, tomatoes: 1, status: TimerStatus.Stop, isRunning: false } }));

    store.on('timer/time/set', ({ timer }, updTime) => {
        return { timer: {...timer, time: updTime} };
    });
    store.on('timer/tomatoes/set', ({ timer }, updTomatoes) => {
        return { timer: {...timer, tomatoes: updTomatoes} };
    });
    store.on('timer/status/set', ({ timer }, updStatus) => {
        return { timer: {...timer, status: updStatus} };
    });
}