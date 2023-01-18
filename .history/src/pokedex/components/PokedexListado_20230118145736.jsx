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
        const funcion = async () => {
            await getObtenerImagenes(vectorPokemones, paginaActual * 48, paginaAnterior * 48)

        }
        if (vectorPokemones.length > 2) {
            funcion();
        }
    }, [vectorPokemonesCompletado])




    /*  //TODO cambiar esto por el estado del redux*/
    const [pokemones, setpokemones] = useState([{
        url: 'url1',
        name: 'Pikachu'
    }])


    const onGoPaginaDetalle = (value) => {
        {/*TODO*Recuerda que aca debes hacer ir a la pagina del detalle segun el numero de pokemon */ }
        navigate(`/pokemon/${value}`)
    }
    return (
        <>

            <div className="col-12 contenedor-listado ">
                <MenuListado></MenuListado>
                {        /*TODO debes hacer la parte del back que se traiga las imagenes de todos */}


                {       /*TODO generar ()=>las cajas con las(2)imagenes de los pokemon SON 48*/}


                {vectorPokemonesCompletado.map((pokemon, index) => {
                    return <img key={index} src={pokemon.sprites.front_default} className='col-xl-1 col-md-2 col-3 imagenPokemon '
                        onClick={() => onGoPaginaDetalle(2)}
                        alt="" />
                })}





            </div>

        </>
    )
}
