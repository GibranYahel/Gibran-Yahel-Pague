import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeModeProvider } from './context'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeModeProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter> 
  </ThemeModeProvider>
);