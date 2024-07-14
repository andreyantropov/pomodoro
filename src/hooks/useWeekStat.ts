import { useStoreon } from "storeon/react";
import { State, Events } from "../store/store";
import { useEffect, useState } from "react";
import { Statistic } from "../interfaces/statistic";

export function useWeekStat() {
    const { stats, selectedWeek } = useStoreon<State, Events>('stats', 'selectedWeek');
    const [weekStat, setWeekStat] = useState( getWeeklyStatistics(stats, selectedWeek) );

    useEffect(() => {
        setWeekStat( getWeeklyStatistics(stats, selectedWeek) );
    }, [stats, selectedWeek]);

    function getWeeklyStatistics(data: Statistic[], weekOffset: number): Statistic[] {
        const today = new Date();
        const currentDayOfWeek = today.getDay();
        const daysToMonday = (currentDayOfWeek + 6) % 7;
        const monday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - daysToMonday - weekOffset * 7);
        const sunday = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 6 - weekOffset * 7);
        
        const result: Statistic[] = [];
        for (let currentDate = monday; currentDate <= sunday; currentDate.setDate(currentDate.getDate() + 1)) {
            const currentDateStamp= currentDate.setHours(0, 0, 0, 0);
            const foundData = data.find(item => item.date === currentDateStamp);
            const currentData: Statistic = foundData ? { ...foundData, date: currentDateStamp, } : { date: currentDateStamp, tomatoes: 0, plannedTomatoes: 0, pauses: 0, workedTime: 0, pausedTime: 0 };
            result.push(currentData);
        }
        return result;
    }

    return [weekStat];
}