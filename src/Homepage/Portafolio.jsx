import React from 'react'
import css from './Portafolio.module.css'
import { Profile } from '../components/Profile/Profile';
import { Weather } from './Weather';
import { SliderHome } from '../components/Slider/SliderHome';
import { Interested } from '../components/Interested/Interested';

export const Portafolio = () => {
  return (
    <div className={css.Portafolio}>
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

    </div>
  )
}