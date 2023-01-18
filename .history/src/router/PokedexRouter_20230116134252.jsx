import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { App } from '../App'

export const PokedexRouter = () => {
  return (
//*Rutas de la aplicacion utilizando react-router-dom
    <Routes>
    <Route path='/' element={<App></App>}></Route>
//*Aca se establece una ruta por defecto que usara un navigate para ir a / la cual es App.
<Route path='*' element={<Navigate to={'/'}></Navigate>}></Route>
    </Routes>
  )
}
