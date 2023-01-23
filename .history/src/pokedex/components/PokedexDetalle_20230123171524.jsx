import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { usePokedex } from '../../hooks/usePokedex';
import { setisError } from '../../ui/slices/uiSlice';
import { CardPoke, CardPoke2 } from './CardPoke';
import './PokedexDetalle.css'
export const PokedexDetalle = () => {
    //TODO COMPONENTE DETALLE
    const { GetDetalle } = usePokedex();
    const navigate = useNavigate();
    const estadoUI = useSelector(state => state.ui)
    const [pokemonActivoSeteado, pokemonActivoSeteadoSet] = useState({})
    const { pokemonActivo } = useSelector((state) => state.pokedex)
    const dispatch = useDispatch();
    const { id } = useParams();
    let nombre = '';
    useEffect(() => {
        GetDetalle(id);
    }, [])
    useEffect(() => {
        try {
            nombre = pokemonActivo ? pokemonActivo.name : '';
            nombre = nombre.toUpperCase();
            pokemonActivoSeteadoSet({ ...pokemonActivo, name: nombre })
        } catch (error) {

        }

    }, [pokemonActivo])

    useEffect(() => {

        if (pokemonActivo) { console.log(pokemonActivo?.sprites) } else { console.log('no tiene') }



    }, [pokemonActivo])


    return (
        <>

            {pokemonActivo?.sprites?.back_default ?

                <div className="contenedor-detalle ">
                    <div className="row">
                        <div className="col-12 cuadro1">
                            <i className="fa-solid fa-left-long iconoAtras" onClick={() => { navigate('/') }}></i>
                            <p className='NombrePokemon'>{pokemonActivoSeteado.name}</p>
                            <div></div>
                        </div>
                    </div>
                    <div className=" col-sm-12 col-md-6 contenedor-general-sprites">
                        <div className="row ">
                            <div className="col-12 contenedor-sprites">
                                <CardPoke2 className='' type={'Back'} sprite={pokemonActivo?.sprites?.back_default}></CardPoke2>
                                <CardPoke2 className='' type={'Back shiny'} sprite={pokemonActivo?.sprites?.back_shiny}></CardPoke2>
                            </div>
                        </div>
                        <div className="row inferior">
                            <div className="col-12 contenedor-sprites">
                                <CardPoke2 type={'Front'} sprite={pokemonActivo?.sprites?.front_default}></CardPoke2>
                                <CardPoke2 type={'Front shiny'} sprite={pokemonActivo?.sprites?.front_shiny}></CardPoke2>
                            </div>
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


