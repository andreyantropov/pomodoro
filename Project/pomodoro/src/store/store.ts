import { createStoreon } from "storeon";
import { TasksState, TasksEvents, tasksModule } from "./tasks";
import { TimerState, TimerEvents, timerModule } from "./timer";

export interface State extends TasksState, TimerState { }

export interface Events extends TasksEvents, TimerEvents { }
  
export const store = createStoreon<State, Events>([tasksModule, timerModule])