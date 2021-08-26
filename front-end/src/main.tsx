import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { CarDetailProvider } from './context/CarDetailContext'

ReactDOM.render(
  <CarDetailProvider>
    <App />
  </CarDetailProvider>,
  document.getElementById('root')
)
