import React from 'react'
import css from './Profile.module.css'
import { useTheme } from '../../hooks'

export const Profile = () => {

  const { theme } = useTheme()

  return (
    <div className={css.Profile}>
        <img src="src/images/Profile_Img.jpg" className={theme === 'dark' ? css.ImageDark : css.ImageLight} alt=""/>
        <div className={css.Name_Detail}>
          <h1>Gibran Yahel San Luis Sanchez</h1>
          <p>Full-Stack - React - JavaScript - UI/UX</p>
        </div>
        <div className={css.Presentation}>
            <strong>Hello!</strong>, my name is <strong>Gibran Yahel</strong> and I am a front-end developer. With Two years of
             experience in HTML, CSS, JavaScript, and others front-end frameworks, I have developed 
             an eye for detail and a passion for creating engaging and responsive user interfaces.
            
            <p>I am excited to join a team of like-minded professionals who share my passion for front-end 
               development. I am confident that my technical skills and problem-solving abilities will allow
               me to contribute to the <strong>success of the team</strong>, while also continuing to grow and learn as a
               developer. 
            </p>
            <p>I am eager to hear more about the current projects and goals of the team, and how I can best
                contribute to achieving them. Thank you for considering me as a potential addition to your
                team.
            </p>
        </div>
    </div>
  )
}