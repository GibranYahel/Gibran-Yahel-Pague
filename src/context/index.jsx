import { createContext, useState } from 'react'

const ThemeModeContext = createContext();

export const ThemeModeContextProvider = ({children}) => {
    const [themeMode, setThemeMode] = useState(false);


    return ( 
        <ThemeModeContext.Provider value={{
            themeMode,
            setThemeMode
        }}>
            {children}
        </ThemeModeContext.Provider>
    )
}