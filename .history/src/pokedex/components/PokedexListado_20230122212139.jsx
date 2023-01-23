import React, { useEffect, useState } from 'react'
import './PokedexListado.css'
import { MenuListado } from './MenuListado'
import { useNavigate } from 'react-router'
import { obtenerTodo } from '../../api/pokedexAPI'
import { usePokedex } from '../../hooks/usePokedex'
import { useDispatch, useSelector } from 'react-redux'
import { onAplicoBusqueda, setisLoading } from '../../ui/slices/uiSlice'
export const PokedexListado = () => {
    {/**ESTE COMPONENTE ES EL PRIMERO QUE SE MUESTRA, LISTADO DE TODOS LOS POKEMON*/ }
    const { vectorPokemones, vectorPokemones2, vectorPokemonesCompletado } = useSelector((state) => state.pokedex)
    const dispatch = useDispatch();
    const { paginaActual, paginaAnterior, isLoading } = useSelector((state) => state.ui)
    const { GetAPI, getObtenerImagenes } = usePokedex();
    const navigate = useNavigate();


    useEffect(() => {
        GetAPI();
        dispatch(onAplicoBusqueda(2))

    }, [])

    useEffect(() => {

        const funcion = async () => {
            await getObtenerImagenes(vectorPokemones, paginaActual * 48, paginaAnterior * 48)
            dispatch(setisLoading(0))
        }
        if (vectorPokemones.length > 0) {
            funcion();

        }

    }, [vectorPokemones, paginaActual, vectorPokemones2])








    const onGoPaginaDetalle = (value) => {
        {/*TODO*Recuerda que aca debes hacer ir a la pagina del detalle segun el numero de pokemon */ }
        navigate(`/pokemon/${value}`)
    }
    return (
        <>

            <div className="col-12 contenedor-listado ">
                <MenuListado></MenuListado>

                {
                    isLoading
                        ?
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        :

                        vectorPokemonesCompletado.map((pokemon, index) => {

                            return <>
                                <img key={index} src={pokemon.sprites.front_default} className='col-xl-1 col-md-2 col-3 imagenPokemon '
                                    onClick={() => onGoPaginaDetalle(pokemon.name)}
                                    alt={pokemon.name} title={pokemon.name} />

                            </>
                        })}
            </div>

        </>
    )
}
