import React from 'react'
import { Marcos } from '../ui/components/Marcos'

import 'animate.css'
import { PokedexListado } from './pokedex/components/PokedexListado'

export const App = () => {
  return (
    <Marcos>
    <PokedexListado></PokedexListado>
    </Marcos>
  
  )
}
