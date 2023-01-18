import React, { useState } from 'react'
import './PokedexListado.css'
import './MenuListado.css'
import { MenuListado } from './MenuListado'
export const PokedexListado = () => {

  /*  //TODO cambiar esto por el estado del redux*/
    const [pokemones, setpokemones] = useState([{
        url: 'url1',
        name: 'Pikachu'
    }])
    return (

        <div className="col-12 contenedor-listado">
        <MenuListado></MenuListado>
       /* //TODO generar las cajas con las imagenes de los pokemon de forma esqueleto por ahora*/
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        <div className="col-md-1 col-3  listado-cajita"></div>
        
        </div>
    )
}
