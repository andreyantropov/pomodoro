import { StoreonModule, createStoreon } from "storeon";

export interface State {
    tasks: Task[];
}

export interface Events {
    'tasks/add': Task;
    'tasks/update': Task;
    'tasks/delete': Task;
}

interface Task {
    id: number;
    text: string;
    isEdit: boolean;
    tomatoes: number;
}

const tasksModule: StoreonModule<State, Events> = store => {
    store.on('@init', () => ({ tasks: [] }));

    store.on('tasks/add', ({ tasks }, newTask) => {
        return { tasks: tasks.concat([newTask]) }
    });
    store.on('tasks/update', ({ tasks }, updTask) => {
        return { tasks: tasks.map((task) => task.id === updTask.id ? updTask : task) };
    });
    store.on('tasks/delete', ({ tasks }, delTask) => {
        return { tasks: tasks.filter((task) => task.id !== delTask.id) };
    });
}
  
export const store = createStoreon<State, Events>([tasksModule])