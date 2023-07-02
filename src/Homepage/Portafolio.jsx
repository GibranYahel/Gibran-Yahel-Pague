import css from './Portafolio.module.css'
import { ThemeButton } from '../components/ThemeButton/ThemeButton'
import { Profile } from '../components/Profile/Profile';
import { Weather } from './Weather';
import { SliderHome } from '../components/Slider/SliderHome';
import { Interested } from '../components/Interested/Interested';
import { Education } from '../components/Education/Education';
import { ContactMe } from '../components/ContactMe/ContactMe';
import { useTheme } from '../hooks';

export const Portafolio = () => {
  const { theme } = useTheme();
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
      <div className={css.FeaturedProject}> Featured-Project </div>
      <div className={css.Education}>
        <Education />
      </div>
      <div className={css.ContactMe}>
        <ContactMe />
      </div>

      <Weather />
      <ThemeButton />

    </div>
  )
}