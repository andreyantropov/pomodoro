import { StoreonModule } from "storeon";
import { Task } from "../interfaces/task";

export interface TasksState {
    tasks: Task[];
}

export interface TasksEvents {
    'tasks/add': Task;
    'tasks/update': Task;
    'tasks/delete': Task;
}

export const tasksModule: StoreonModule<TasksState, TasksEvents> = store => {
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