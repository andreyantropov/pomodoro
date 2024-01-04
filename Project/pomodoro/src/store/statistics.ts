import { StoreonModule } from "storeon";
import { Task } from "../interfaces/task";
import { Statistic } from "../interfaces/statistic";

export interface StatisticsState {
    stats: Statistic[];
}

export interface StatisticsEvents {
    'stats/add': Statistic;
    'stats/update': Statistic;
}

export const statisticsModule: StoreonModule<StatisticsState, StatisticsEvents> = store => {
    store.on('@init', () => ({ stats: [] }));

    store.on('stats/add', ({ stats }, newStat) => {
        return { stats: stats.concat([newStat]) };
    });
    store.on('stats/update', ({ stats }, updStat) => {
        return { stats: stats.map((stat) => stat.date === updStat.date ? updStat : stat) };
    });
}