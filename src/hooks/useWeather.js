import { useDispatch, useSelector } from "react-redux"
import { onWeatherClose, onWeathesOpen } from "../store";


export const useWeather = () => {

    const dispatch = useDispatch();

    const { isWeatherOpen } = useSelector( state => state.ui );

    const toggleDivShow = () => {
        isWeatherOpen 
            ? dispatch(onWeatherClose())
            : dispatch(onWeathesOpen())
    }


    return {
        //Properties
        isWeatherOpen,

        //Methods
        toggleDivShow,
    }


}