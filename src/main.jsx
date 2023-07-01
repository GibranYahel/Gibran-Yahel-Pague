import { store } from './store'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeModeProvider } from './context'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={ store } >
    <ThemeModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter> 
    </ThemeModeProvider>
  </Provider>
  
);