import React, { useState } from 'react'
import './PokedexListado.css'
export const PokedexListado = () => {

    //TODO cambiar esto por el estado del redux
    const [pokemones, setpokemones] = useState([{
        url: 'url1',
        name: 'Pikachu'
    }])
    return (

        <div className="col-12 contenedor-listado">
        <div className="col-2 col-sm-1 listado-cajita"></div>
    
        </div>
    )
}
