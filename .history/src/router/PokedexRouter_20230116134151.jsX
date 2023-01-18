import React from 'react'
import { Route, Routes } from 'react-router'
import { App } from '../App'

export const PokedexRouter = () => {
  return (
//*Rutas de la aplicacion utilizando react-router-dom
    <Routes>
    <Route path='/' element={<App></App>}></Route>
    </Routes>
  )
}
