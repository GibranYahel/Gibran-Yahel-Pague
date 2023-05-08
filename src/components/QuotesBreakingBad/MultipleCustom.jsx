import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import css from './Quotes.module.css'
import { Weather } from '../../Homepage/Weather';

export const MultipleCustom = () => {

    const [counter, setCounter] = useState(1);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    const { author, quote } = !!data && data[0];

  return (
    <div className={css.Quotes}>
      <h3>the special thing about this little project are the custom hooks <br /> 
      <strong>(and the use of barrel files)</strong><br />
      that consume an api to make the code much more readable on a team</h3>
      <hr />
      <h1>BreakinBad  Quotes</h1>
      <hr />

      {
        isLoading 
          ? (
            <div className={css.Loading}>
              <h1>Loading...</h1>
            </div>
          )
          : (
            <blockquote className={css.Block_Quote}>
            <p>{ quote }</p>

            <footer>{ '— ' + author }</footer>
            </blockquote>
          )
      }

      <button 
        disabled={ isLoading }
        onClick={() => setCounter(counter + 1)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Next Quote 
      
      </button>
      
      <Weather />
    </div>
  )
}
