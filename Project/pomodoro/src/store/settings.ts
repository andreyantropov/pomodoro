import { StoreonModule } from "storeon";
import { PomodoroSettings } from "../interfaces/pomodoro-settings";

export interface SettingsState {
    settings: PomodoroSettings;
}

export interface SettingsEvents {
    'settings/update': PomodoroSettings;
}

export const settingsModule: StoreonModule<SettingsState, SettingsEvents> = store => {
    store.on('@init', () => ({ settings: { tomato: 1_500_000, shortBreak: 300_000, longBreak: 900_000, additionalTime: 60_000 } }));

    store.on('settings/update', ({ settings }, newSettings) => {
        return { settings: newSettings };
    });
}