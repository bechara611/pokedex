import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router'
import './PokedexDetalle.css'
export const PokedexDetalle = () => {
    //TODO COMPONENTE DETALLE
    const navigate = useNavigate();
    const estadoUI = useSelector(state=>state.ui)
    return (
        <>
            <div className="col-12 contenedor-detalle ">
                <h1>Por construir- detalle</h1>
                <button onClick={() => { console.log(estadoUI) navigate('/') }}></button>
            </div>
        </>
    )
}


