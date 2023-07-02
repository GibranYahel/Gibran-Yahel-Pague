import { useTheme } from '../../hooks'
import css from './ContactMe.module.css'


export const ContactMe = (  ) => {

    const { theme } = useTheme();

    return (
        <>
            <div className={theme === 'dark' ? css.ContactMeDark : css.ContactMeLight }>
                <h1>Contact Me</h1>
            </div>
        </>
    )
}