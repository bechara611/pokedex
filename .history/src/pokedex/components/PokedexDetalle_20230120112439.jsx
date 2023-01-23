import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router'
import { setisError } from '../../ui/slices/uiSlice';
import './PokedexDetalle.css'
export const PokedexDetalle = () => {
    //TODO COMPONENTE DETALLE
    const navigate = useNavigate();
    const estadoUI = useSelector(state=>state.ui)
    const dispatch = useDispatch();
    return (
        <>
            <div className="col-12 contenedor-detalle ">
                <h1>Por construir- detalle</h1>
                <button onClick={() => { 
                   
                    console.log(estadoUI); navigate('/') }}></button>
                  
            </div>
        </>
    )
}


