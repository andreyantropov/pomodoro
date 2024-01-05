import { StoreonModule } from "storeon";
import { PomodoroSettings } from "../interfaces/pomodoro-settings";

export interface SettingsState {
    settings: PomodoroSettings;
}

export interface SettingsEvents {
    'settings/update': PomodoroSettings;
}

export const settingsModule: StoreonModule<SettingsState, SettingsEvents> = store => {
    store.on('@init', () => ({ settings: { tomato: 25, shortBreak: 5, longBreak: 15, additionalTime: 1 } }));

    store.on('settings/update', ({ settings }, newSettings) => {
        return { settings: newSettings };
    });
}