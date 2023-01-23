import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { usePokedex } from '../../hooks/usePokedex';
import { setisError } from '../../ui/slices/uiSlice';
import { CardPoke } from './CardPoke';
import './PokedexDetalle.css'
export const PokedexDetalle = () => {
    //TODO COMPONENTE DETALLE
    const {GetDetalle} = usePokedex();
    const navigate = useNavigate();
    const estadoUI = useSelector(state=>state.ui)
    const {pokemonActivo} = useSelector((state)=>state.pokedex)
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() => {
        GetDetalle(id);
    }, [])
    
    useEffect(() => {
        if(pokemonActivo){console.log(pokemonActivo)}
        
    
     
    }, [pokemonActivo])
    
    
    return (
        <>
            <div className="col-12 contenedor-detalle ">
                <h1>Por construir- detalle</h1>
               
                <button onClick={() => { 
                   
                 navigate('/') }}></button>
                 <CardPoke sprite={pokemonActivo.sprites.back_default}></CardPoke>
            </div>
        </>
    )
}


