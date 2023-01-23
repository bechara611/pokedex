import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { usePokedex } from '../../hooks/usePokedex';
import { setisError } from '../../ui/slices/uiSlice';
import { CardPoke } from './CardPoke';
import './PokedexDetalle.css'
export const PokedexDetalle = () => {
    //TODO COMPONENTE DETALLE
    const { GetDetalle } = usePokedex();
    const navigate = useNavigate();
    const estadoUI = useSelector(state => state.ui)
    const [pokemonActivoSeteado,pokemonActivoSeteadoSet]=useState({})
    const { pokemonActivo } = useSelector((state) => state.pokedex)
    const dispatch = useDispatch();
    const { id } = useParams();
    let nombre='';
    useEffect(() => {
        GetDetalle(id);
    }, [])
    useEffect(() => {
        try {
            nombre= pokemonActivo ? pokemonActivo.name : '';
            nombre=nombre.toUpperCase();
            pokemonActivoSeteadoSet({...pokemonActivo,name:nombre})
        } catch (error) {
            
        }
      
    }, [pokemonActivo])

    useEffect(() => {

        if (pokemonActivo) { console.log(pokemonActivo?.sprites?.back_default) } else { console.log('no tiene') }



    }, [pokemonActivo])


    return (
        <>

            {pokemonActivo?.sprites?.back_default ?

                <div className="contenedor-detalle ">
                    <div className="row">
                        <div className="col-12 cuadro1">
                        <i className="fa-solid fa-left-long iconoMenu"></i>
                            <p className='NombrePokemon'>{pokemonActivoSeteado.name}</p>
                        </div>
                    </div>


                </div>


                :

                <>
                    <h1>cargando</h1>
                </>}



        </>
    )
}


