import { createStoreon } from "storeon";
import { TasksState, TasksEvents, tasksModule } from "./tasks";
import { TimerState, TimerEvents, timerModule } from "./timer";
import { StatisticsEvents, StatisticsState, statisticsModule } from "./statistics";
import { SettingsEvents, SettingsState, settingsModule } from "./settings";
import { persistState } from "@storeon/localstorage";

export interface State extends TasksState, TimerState, StatisticsState, SettingsState { }

export interface Events extends TasksEvents, TimerEvents, StatisticsEvents, SettingsEvents { }
  
export const store = createStoreon<State, Events>([tasksModule, timerModule, statisticsModule, settingsModule, persistState(['tasks', 'statistics', 'settings'])]);