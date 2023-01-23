import React, { useEffect, useState } from 'react'
import './PokedexListado.css'
import { MenuListado } from './MenuListado'
import { useNavigate } from 'react-router'
import { obtenerTodo } from '../../api/pokedexAPI'
import { usePokedex } from '../../hooks/usePokedex'
import { useDispatch, useSelector } from 'react-redux'
export const PokedexListado = () => {
    {/**ESTE COMPONENTE ES EL PRIMERO QUE SE MUESTRA, LISTADO DE TODOS LOS POKEMON*/ }
    const { vectorPokemones, vectorPokemonesCompletado } = useSelector((state) => state.pokedex)
    const dispatch = useDispatch();
    const { paginaActual, resultadoPaginaActual, paginaAnterior } = useSelector((state) => state.ui)
    const { GetAPI, getObtenerImagenes } = usePokedex();
    const navigate = useNavigate();


    useEffect(() => {
        GetAPI();


    }, [])

    useEffect(() => {
        console.log({vectorPokemones,entro:'si'})
        const funcion = async () => {
            await getObtenerImagenes(vectorPokemones, paginaActual * 48, paginaAnterior * 48)

        }
        if (vectorPokemones.length > 2) {
            funcion();

        }

    }, [vectorPokemones, paginaActual])








    const onGoPaginaDetalle = (value) => {
        {/*TODO*Recuerda que aca debes hacer ir a la pagina del detalle segun el numero de pokemon */ }
        navigate(`/pokemon/${value}`)
    }
    return (
        <>

            <div className="col-12 contenedor-listado ">
                <MenuListado></MenuListado>

                {
                    vectorPokemonesCompletado.length == 0 
                    ?
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        :
                        vectorPokemonesCompletado.map((pokemon, index) => {

                            return <img key={index} src={pokemon.sprites.front_default} className='col-xl-1 col-md-2 col-3 imagenPokemon '
                                onClick={() => onGoPaginaDetalle(2)}
                                alt={pokemon.name} title={pokemon.name} />
                        })}
            </div>

        </>
    )
}
