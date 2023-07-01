import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isWeatherOpen: false,
        theme: 'dark', 
    },
    reducers: {
        onWeathesOpen: ( state ) => {
            state.isWeatherOpen = true;
        },
        onWeatherClose: ( state ) => {
            state.isWeatherOpen = false;
        },
        onThemeDark: ( state ) => {
            state.theme = 'dark'
        },
        onThemeLight: ( state ) => {
            state.theme = 'light'
        },
    }
});

export const { onWeathesOpen, onWeatherClose, onThemeLight, onThemeDark } = uiSlice.actions;