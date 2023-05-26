import { createContext, useState } from 'react'

export const ThemeModeContext = createContext();

export const ThemeModeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    const [isWeatherOpen, setIsWeatherOpen] = useState(false);
    const toggleDivShow = () => {
        setIsWeatherOpen(!isWeatherOpen);
    };
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return ( 
        <ThemeModeContext.Provider value={{
            theme,
            toggleTheme,
            toggleDivShow,
            isWeatherOpen
        }}>
            {children}
        </ThemeModeContext.Provider>
    )
}