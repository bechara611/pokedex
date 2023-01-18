import React, { useState } from 'react'
import './PokedexListado.css'

const funcionn=()=>{
    for (let i = 0; i < 100; i++) {
    return   <div className="col-2 listado-cajita"></div>
        
    }
}


export const PokedexListado = () => {

    //TODO cambiar esto por el estado del redux
    const [pokemones, setpokemones] = useState([{
        url:'url1',
        name:'Pikachu'
    }])
    
    return (
       
            <div className="col-12 contenedor-listado">
        {
            funcionn()
          
        }
       
        </div>
    )
}
