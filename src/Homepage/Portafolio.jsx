import React, { useContext } from 'react'
import css from './Portafolio.module.css'
import { ThemeButton } from '../components/ThemeButton/ThemeButton'
import { Profile } from '../components/Profile/Profile';
import { Weather } from './Weather';
import { SliderHome } from '../components/Slider/SliderHome';
import { Interested } from '../components/Interested/Interested';
import { ThemeModeContext } from '../context'

export const Portafolio = () => {
  const { theme } = useContext(ThemeModeContext);
  return (
    <div className={theme === 'dark' ? css.darkTheme : css.lightTheme}>
      <div className={css.Profile}>
        <span><strong>Profile</strong></span>
        <Profile />
      </div>
      <div className={css.Interested}>
         <Interested />
         <hr />
      </div>
      <div className={css.Slider}>
        <SliderHome />
        <hr />
      </div>
      <div className={css.WorkExp}> WorkExp </div>
      <div className={css.Education}> Education </div>
      <div className={css.Social}> Social </div>

      <Weather />
      <ThemeButton />

    </div>
  )
}