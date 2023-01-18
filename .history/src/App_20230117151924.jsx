import React from 'react'
import { PokedexListado } from './pokedex/components/PokedexListado'

import 'animate.css'
import { Marcos } from './ui/components/Marcos'

export const App = () => {
  return (
    <Marcos>
    <PokedexListado></PokedexListado>
    </Marcos>
  
  )
}
