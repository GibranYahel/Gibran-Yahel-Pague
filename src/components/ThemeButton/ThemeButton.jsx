import React, { useContext } from 'react'
import css from './ThemeButton.module.css'
import { ThemeModeContext } from '../../context'

export const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeModeContext)
 
  return (
    <div className={theme === 'dark' ? css.ButtonBoxDark : css.ButtonBoxLight } onClick={toggleTheme} id={css.Theme}>
      <div className={theme === 'dark' ? css.ButtonBallDark : css.ButtonBallLight } >
      </div>
    </div>
  )
}
