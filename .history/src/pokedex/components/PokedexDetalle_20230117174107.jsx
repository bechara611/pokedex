import React from 'react'
import { useNavigate } from 'react-router'
import './PokedexDetalle.css'
export const PokedexDetalle = () => {
    //TODO COMPONENTE DETALLE
    const navigate = useNavigate();
    return (
        <>
            <div className="col-12 contenedor-detalle ">
                <h1>Por construir- detalle</h1>
                <button onClick={() => { navigate('/') }}></button>
            </div>
        </>
    )
}
