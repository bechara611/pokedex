import React from 'react'
import { PokedexListado } from './pokedex/components/PokedexListado'

import 'animate.css'
import { Marcos } from './ui/components/Marcos'
import { PokedexDetalle } from './pokedex/PokedexDetalle'

export const App = () => {
  return (

    <Marcos>
      {/*Arriba llamamos al marco y luego el pokedexListado*/}

      {/*TODO posiblemente aca dependiendo de un estado se muestra o no el pokemon activo y su detalle*/}
      <PokedexListado></PokedexListado>
    </Marcos>

  )
}
{/*ESTA AppDetalle es la que muestra la ruta cuando seleccionan un pokemon en especifico*/}
export const AppDetalle = () => {
  console.log('Nueva pagina')
  return (

    <Marcos>
      {/*Arriba llamamos al marco y luego el pokedexListado*/}

    <PokedexDetalle></PokedexDetalle>
    
    </Marcos>

  )
}
