import { StoreonModule } from "storeon";
import { Statistic } from "../interfaces/statistic";

export interface StatisticsState {
    stats: Statistic[];
    selectedWeek: number;
    selectedDate: number;
}

export interface StatisticsEvents {
    'statistics/stats/add': Statistic;
    'statistics/stats/update': Statistic;
    'statistics/selectedWeek/update': number;
    'statistics/selectedDate/update': number;
}

export const statisticsModule: StoreonModule<StatisticsState, StatisticsEvents> = store => {
    store.on('@init', () => ({ stats: [], selectedWeek: 0, selectedDate: new Date().setHours(0, 0, 0, 0) }));

    store.on('statistics/stats/add', ({ stats }, newStat) => {
        return { stats: stats.concat([newStat]) };
    });
    store.on('statistics/stats/update', ({ stats }, updStat) => {
        return { stats: stats.map((stat) => stat.date === updStat.date ? updStat : stat) };
    });

    store.on('statistics/selectedWeek/update', ({ selectedWeek }, updWeek) => {
        return { selectedWeek: updWeek };
    });
    store.on('statistics/selectedDate/update', ({ selectedDate }, updDate) => {
        return { selectedDate: updDate };
    });
}