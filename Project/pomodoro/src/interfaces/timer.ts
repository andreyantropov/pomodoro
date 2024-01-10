import { TimerStatus } from "../enums/TimerStatus";

export interface Timer {
    time: number;
    tomatoes: number;
    status: TimerStatus;
}