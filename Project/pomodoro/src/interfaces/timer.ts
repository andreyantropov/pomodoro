export interface Timer {
    time: number;
    tomatoes: number;
    status: Status;
}

export type Status =  'Задача' | 'Короткий перерыв' | 'Длинный пееррыв';