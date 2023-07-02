import { useDispatch, useSelector } from "react-redux"
import { onThemeDark, onThemeLight } from "../store";


export const useTheme = () => {

    const dispatch = useDispatch();

    const { theme } = useSelector( state => state.ui )

    const toggleTheme = () => {
        theme === 'dark'
            ? dispatch(onThemeLight())
            : dispatch(onThemeDark())
    }


    return {
        theme,

        toggleTheme,
    }
}