import { useStoreon } from "storeon/react";
import { State, Events } from "../store/store";
import { useEffect, useState } from "react";

export function useSelectedStat() {
    const { stats, selectedDate } = useStoreon<State, Events>('stats', 'selectedDate');
    const [selectedStat, setSelectedStat] = useState(stats.find(stat => stat.date === selectedDate));

    useEffect(() => {
        setSelectedStat(stats.find(stat => stat.date === selectedDate));
    }, [stats, selectedDate]);

    return [selectedStat];
}