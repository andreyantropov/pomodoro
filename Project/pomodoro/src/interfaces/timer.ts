export interface Timer {
    time: number;
    tomatoes: number;
    status: status;
}

export type status =  'Задача' | 'Короткий перерыв' | 'Длинный пееррыв';