import { StoreonModule, createStoreon } from "storeon";

export interface State {
    tasks: Task[];
}

export interface Events {
    'tasks/add': Task;
}

interface Task {
    id: string;
    task: string;
}

const tasksModule: StoreonModule<State, Events> = store => {
    store.on('@init', () => ({ tasks: [] }));
    store.on('tasks/add', ({ tasks }, task) => {
        return { tasks: tasks.concat([task]) }
    });
}
  
export const store = createStoreon<State, Events>([tasksModule])