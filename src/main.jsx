import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeModeContextProvider } from './context'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeModeContextProvider >
    <BrowserRouter>
    <App />
    </BrowserRouter> 
  </ThemeModeContextProvider>
);