import { StoreonModule, createStoreon } from "storeon";

export interface State {
    tasks: Task[];
}

export interface Events {
    'tasks/add': Task;
    'tasks/delete': string;
}

interface Task {
    id: string;
    task: string;
}

const tasksModule: StoreonModule<State, Events> = store => {
    store.on('@init', () => ({ tasks: [] }));
    store.on('tasks/add', ({ tasks }, newTask) => {
        return { tasks: tasks.concat([newTask]) }
    });
    store.on('tasks/delete', ({ tasks }, id) => {
        return { tasks: tasks.filter((task) => task.id !== id) };
    });
}
  
export const store = createStoreon<State, Events>([tasksModule])