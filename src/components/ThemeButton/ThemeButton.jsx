import React from 'react'
import css from './ThemeButton.module.css'
import { useTheme } from '../../hooks'

export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
 
  return (
    <div className={theme === 'dark' ? css.ButtonBoxDark : css.ButtonBoxLight } onClick={toggleTheme} id={css.Theme}>
      <div className={theme === 'dark' ? css.ButtonBallDark : css.ButtonBallLight } >
      </div>
    </div>
  )
}
