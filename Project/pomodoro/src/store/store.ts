import { createStoreon } from "storeon";
import { TasksState, TasksEvents, tasksModule } from "./tasks";
import { TimerState, TimerEvents, timerModule } from "./timer";
import { StatisticsEvents, StatisticsState } from "./statistics";

export interface State extends TasksState, TimerState, StatisticsState { }

export interface Events extends TasksEvents, TimerEvents, StatisticsEvents { }
  
export const store = createStoreon<State, Events>([tasksModule, timerModule])