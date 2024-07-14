import { useStoreon } from "storeon/react";
import { State, Events } from "../store/store";
import { useEffect, useState } from "react";
import { useCurrentDate } from "./useCurrentDate";

export function useCurrentStat() {
    const { stats } = useStoreon<State, Events>('stats');
    const [currentDate] = useCurrentDate();

    const [currentStat, setCurrentStat] = useState(stats.find(stat => stat.date === currentDate));

    useEffect(() => {
        setCurrentStat(stats.find(stat => stat.date === currentDate));
    }, [stats]);

    return [currentStat];
}