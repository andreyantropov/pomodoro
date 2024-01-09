import { StoreonModule } from "storeon";
import { Settings } from "../interfaces/settings";

export interface SettingsState {
    settings: Settings;
}

export interface SettingsEvents {
    'settings/update': Settings;
}

export const settingsModule: StoreonModule<SettingsState, SettingsEvents> = store => {
    store.on('@init', () => ({ settings: { tomato: 1_500_000, shortBreak: 300_000, longBreak: 900_000, additionalTime: 60_000 } }));

    store.on('settings/update', ({ settings }, newSettings) => {
        return { settings: newSettings };
    });
}