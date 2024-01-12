import { StoreonModule } from "storeon";
import { Settings } from "../interfaces/settings";
import { DEFAULT_ADDITIONAL_TIME, DEFAULT_LONG_BREAK_TIME, DEFAULT_SHORT_BREAK_TIME, DEFAULT_WORK_TIME } from "../constants/time";

export interface SettingsState {
    settings: Settings;
}

export interface SettingsEvents {
    'settings/update': Settings;
}

export const settingsModule: StoreonModule<SettingsState, SettingsEvents> = store => {
    store.on('@init', () => ({ settings: { workTime: DEFAULT_WORK_TIME, shortBreak: DEFAULT_SHORT_BREAK_TIME, longBreak: DEFAULT_LONG_BREAK_TIME, additionalTime: DEFAULT_ADDITIONAL_TIME, theme: 'light' } }));

    store.on('settings/update', ({ settings }, newSettings) => {
        return { settings: newSettings };
    });
}