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
        <div className="col-2 listado-cajita"></div>
    
        </div>
    )
}
