import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { usePokedex } from '../../hooks/usePokedex';
import { setisError } from '../../ui/slices/uiSlice';
import { CardPoke, CardPoke2 } from './CardPoke';
import img from './../../img/notfound.png'
import './PokedexDetalle.css'
import { Status } from './Status';
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

        if (pokemonActivo) { console.log(pokemonActivo) } else { console.log('no tiene') }



    }, [pokemonActivo])


    return (
        <>

            {pokemonActivo?.sprites ?

                <div className="contenedor-detalle ">
                    <div className="row">
                        <div className="col-12 cuadro1">
                            <i className="fa-solid fa-left-long iconoAtras" onClick={() => { navigate('/') }}></i>
                            <p className='NombrePokemon'>{pokemonActivoSeteado.name}</p>
                            <div></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-sm-12 col-lg-6 contenedor-general-sprites">
                            <div className="row ">
                                <div className="col-12 contenedor-sprites">
                                    <CardPoke2 className='' type={pokemonActivo?.sprites?.back_default ? 'Back' : 'N/A'} sprite=
                                        {pokemonActivo?.sprites?.back_default ? pokemonActivo?.sprites?.back_default : img}

                                    ></CardPoke2>
                                    <CardPoke2 className='' type={pokemonActivo?.sprites?.back_shiny ? 'Back shiny' : 'N/A'} sprite=
                                        {pokemonActivo?.sprites?.back_shiny ? pokemonActivo?.sprites?.back_shiny : img}></CardPoke2>
                                </div>
                            </div>
                            <div className="row inferior">
                                <div className="col-12 contenedor-sprites">

                                    <CardPoke2 type={pokemonActivo?.sprites?.front_default ? 'Front' : 'N/A'} sprite=
                                        {pokemonActivo?.sprites?.front_default ? pokemonActivo?.sprites?.front_default : img}></CardPoke2>
                                    <CardPoke2 type={pokemonActivo?.sprites?.front_default ? 'Front shiny' : 'N/A'} sprite=
                                        {pokemonActivo?.sprites?.front_shiny ? pokemonActivo?.sprites?.front_shiny : img}></CardPoke2>
                                </div>
                            </div>
                        </div>
                        { /*ACA*/}
                        <div className=" col-sm-12 col-lg-6 contenedor-general-status">
                            <div className="row ">
                           
                                <div className="col-12 contenedor-status">
                                    {/*ACA VA LA PARTE COMO TAL DEL COMPONENTE DEL STATUS */}
                                    <p className='titulo-status'>BASE STATUS</p>
                                    <Status objeto={pokemonActivo.stats}></Status>
                                </div>
                                <hr className='col-12 divisor' />
                                <div className="col-8 contenedor-peso">
                                   <p><span>Height: </span>{pokemonActivo?.height}</p>
                                   <p><span>Weight: </span>{pokemonActivo?.weight}</p>
                                </div>
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


