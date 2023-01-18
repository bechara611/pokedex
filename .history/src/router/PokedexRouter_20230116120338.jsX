import React from 'react'
import { Route, Router, Routes } from 'react-router'
import { Marcos } from '../../ui/components/Marcos'

export const PokedexRouter = () => {
  return (
    <Routes>
    <Route path='/' element={<Marcos></Marcos>}></Route>
    </Routes>
  )
}
