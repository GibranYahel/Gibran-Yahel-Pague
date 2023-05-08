import { useEffect, useState } from 'react'
import css from './Weather.module.css'
import axios from 'axios'

export const Weather = () => {

  const key = '9babd78908142e8f18785bc01cab05c8'

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}`
  
  const searchLocation = (event) => {
    if (event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('');
    }  
  }

  return (
    <>
      <div className={css.container}>
        <p id={css.city}>{data.name}</p>
        <div className={css.weather}>
          <input 
            value={ location }
            onChange={ event => setLocation(event.target.value )}
            onKeyDown={ searchLocation }
            placeholder='Ej. México'
            type="text" 
          />
          {data.main ? <h4>Temp<br /> <p>{data.main.temp.toFixed()}°C</p></h4> : <h4>Temp<br /> </h4>}
          {data.main ? <h4>Temp-Min <br /> <p id={css.min}>{data.main.temp_min.toFixed()}°C</p> </h4> : <h4>Temp-Min <br /> <p id={css.selectCity}>select a City</p> </h4>}
          {data.main ? <h4>Temp-Max <br /> <p id={css.max}>{data.main.temp_max.toFixed()}°C</p> </h4> : <h4>Temp-Max <br /> </h4>}
          <img src="src/images/weather.gif" />
        </div>
      </div>
    
    </>
  )
}