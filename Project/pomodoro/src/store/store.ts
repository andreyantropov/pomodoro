import { StoreonModule, createStoreon } from "storeon";
import { Task } from "../interfaces/task";
import { Timer, status } from "../interfaces/timer";

export interface State extends TasksState, TimerState { }

export interface Events extends TasksEvents, TimerEvents { }

interface TasksState {
    tasks: Task[];
}

interface TasksEvents {
    'tasks/add': Task;
    'tasks/update': Task;
    'tasks/delete': Task;
}

interface TimerState {
    timer: Timer;
}

interface TimerEvents {
    'timer/time/set': number;
    'timer/tomatoes/set': number;
    'timer/status/set': status;
}

const tasksModule: StoreonModule<TasksState, TasksEvents> = store => {
    store.on('@init', () => ({ tasks: [] }));

    store.on('tasks/add', ({ tasks }, newTask) => {
        return { tasks: tasks.concat([newTask]) };
    });
    store.on('tasks/update', ({ tasks }, updTask) => {
        return { tasks: tasks.map((task) => task.id === updTask.id ? updTask : task) };
    });
    store.on('tasks/delete', ({ tasks }, delTask) => {
        return { tasks: tasks.filter((task) => task.id !== delTask.id) };
    });
}

const timerModule: StoreonModule<TimerState, TimerEvents> = store => {
    store.on('@init', () => ({ timer: { time: 1500, tomatoes: 1, status: 'Задача' } }));

    store.on('timer/time/set', ({ timer }, updTime) => {
        return { timer: {...timer, time: updTime} };
    });
    store.on('timer/tomatoes/set', ({ timer }, updTomatoes) => {
        return { timer: {...timer, tomatoes: updTomatoes} };
    });
    store.on('timer/status/set', ({ timer }, updStatus) => {
        return { timer: {...timer, status: updStatus} };
    });
}
  
export const store = createStoreon<State, Events>([tasksModule, timerModule])