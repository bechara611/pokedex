import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PokedexRouter } from './router/PokedexRouter'



ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <PokedexRouter></PokedexRouter>
  </BrowserRouter>

)
