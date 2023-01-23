import React, { useEffect } from 'react'
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
    const { pokemonActivo } = useSelector((state) => state.pokedex)
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        GetDetalle(id);
    }, [])

    useEffect(() => {

        if (pokemonActivo) { console.log(pokemonActivo?.sprites?.back_default) } else { console.log('no tiene') }



    }, [pokemonActivo])


    return (
        <>

            {pokemonActivo?.sprites?.back_default ?
                <>
                    <div className="container-fluid contenedor-detalle ">
                        <div className="row fila1">
                            <div className="col-12">
                            <p className='fondotexto col-6'>{pokemonActivo.name}</p>
                          <p className='col-6'>sadsfsafasf</p>
                            </div>
                           
                           
                         
                           

                        </div>
                    </div>

                </>
                :

                <>
                    <h1>cargando</h1>
                </>}



        </>
    )
}


