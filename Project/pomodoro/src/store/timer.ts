import { StoreonModule } from "storeon";
import { Timer } from "../interfaces/timer";
import { TimerStatus } from "../enums/TimerStatus";

export interface TimerState {
    timer: Timer;
}

export interface TimerEvents {
    'timer/update': Timer;
}

export const timerModule: StoreonModule<TimerState, TimerEvents> = store => {
    store.on('@init', () => ({ timer: { time: 1_500_000, tomatoes: 1, status: TimerStatus.Stop, isRunning: false } }));

    store.on('timer/update', ({ timer }, updTimer) => {
        return { timer: updTimer };
    });
}