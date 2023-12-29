export interface Timer {
    time: number;
    tomatoes: number;
    status: Status;
    isRunning: boolean;
}

export type Status =  'in progress' | 'break' | 'stop';