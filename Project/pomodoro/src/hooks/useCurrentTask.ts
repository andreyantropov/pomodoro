import { useStoreon } from "storeon/react";
import { State, Events } from "../store/store";
import { useEffect, useState } from "react";

export function useCurrentTask() {
    const { tasks } = useStoreon<State, Events>('tasks');

    const [currentTask, setCurrentTask] = useState(tasks[0]);

    useEffect(() => {
        setCurrentTask(tasks[0]);
    }, [tasks]);

    return [currentTask];
}