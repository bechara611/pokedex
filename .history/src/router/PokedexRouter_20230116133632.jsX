import React from 'react'
import { Route, Routes } from 'react-router'
import { Marcos } from '../../ui/components/Marcos'

export const PokedexRouter = () => {
  return (
//*Rutas de la aplicacion utilizando react-router-dom
    <Routes>
    <Route path='*' element={<Marcos></Marcos>}></Route>
    </Routes>
  )
}
