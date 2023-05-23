import { createContext, useState } from 'react'

export const ThemeModeContext = createContext();

export const ThemeModeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      };
    console.log('THEME:', theme)

    return ( 
        <ThemeModeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeModeContext.Provider>
    )
}