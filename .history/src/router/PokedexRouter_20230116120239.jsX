import React from 'react'
import { Route, Router } from 'react-router'
import { Marcos } from '../../ui/components/Marcos'

export const PokedexRouter = () => {
  return (
    <Router>
    <Route path='/' element={<Marcos></Marcos>}></Route>
    </Router>
  )
}
