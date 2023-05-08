import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Portafolio } from './Homepage/Portafolio'
import { MultipleCustom } from './components/QuotesBreakingBad/MultipleCustom'
import { CardsRick } from './components/CardsRick/CardsRick'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Portafolio /> } />
      <Route path='/QuotesBreakinBad' element={ <MultipleCustom /> } />
      <Route path='/CardsRick' element={ <CardsRick /> }/>
    </Routes>
  )
}