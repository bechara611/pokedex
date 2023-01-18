import React from 'react'
import { PokedexListado } from './pokedex/components/PokedexListado'

import 'animate.css'
import { Marcos } from './ui/components/Marcos'

export const App = () => {
  return (

    <Marcos>
      {/*Arriba llamamos al marco y luego el pokedexListado*/}

      {/*TODO posiblemente aca dependiendo de un estado se muestra o no el pokemon activo y su detalle*/}
      <PokedexListado></PokedexListado>
    </Marcos>

  )
}
