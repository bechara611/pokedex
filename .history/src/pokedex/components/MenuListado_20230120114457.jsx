import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { usePokedex } from '../../hooks/usePokedex';
import { cambiarPaginaActualAnterior, cambiarPaginaActualSiguiente, onAplicoBusqueda, onResetPaginas, setisError } from '../../ui/slices/uiSlice';
import { setBusquedaPokemon, setErrorBusqueda, setvectorpokemonfusion } from '../slices/slicePokedex';
import './Menulistado.css'

export const MenuListado = () => {
  {/*COMPONENTE QUE MUESTRA UN MENU EN LA PARTE SUPERIOR DONDE ESTA EL INPUT BUSCAR Y LAS FLECHAS DE NEXT Y ANTERIOR*/ }
  const [valorBusqueda, setValorBusqueda] = useState('');
  const [onsubimit, setOnSubmit] = useState(false);
  const { GetAPI } = usePokedex();
  const [Direccion, setDireccion] = useState('');
  const { vectorPokemones, vectorPokemonesCompletado, errorBusqueda } = useSelector((state) => state.pokedex)
  const { paginaActual } = useSelector((state) => state.ui)
  const dispatch = useDispatch();
  /*Metodo submit para que al dar enter generar la busqueda del pokemon */
  const onHandledSubmit = (e) => {
    e.preventDefault();
    //TODO debes realizar el metodo de filtrar el vector completo para que salga solo los parecidos al valor.
    if (valorBusqueda !== '') {
      dispatch(onAplicoBusqueda());
      dispatch(setBusquedaPokemon(valorBusqueda.toLowerCase()))
      dispatch(cambiarPaginaActualSiguiente(1))
    } else {
      //esta parte me resetea la busqueda obteniendo todos los pokes, y lueugo solo filtrando por las paginas.
     
    
    }
  }

  useEffect(() => {
    if (errorBusqueda === true) {
     
      dispatch(setErrorBusqueda());
      dispatch(setisError())
    }


  }, [errorBusqueda])

  useEffect(() => {

    if (vectorPokemonesCompletado.length == 0) {
      if (Direccion === 'adelante') {
        if ((paginaActual * 48) > vectorPokemones.length) {

          dispatch(cambiarPaginaActualAnterior(1))
          return
        }

        dispatch(cambiarPaginaActualSiguiente(1))
        return
      }
      if (Direccion === 'atras') {

        dispatch(cambiarPaginaActualAnterior(1))
      }



    }
    // setDireccion('')
  }, [vectorPokemonesCompletado])

  return (

    <>
      <div className=" contenedor-menu col-12">
      <button onClick={()=>{ dispatch(setisError(1));}}>error</button>
        <i className="fa-solid fa-arrow-left iconoMenu" onClick={() => {
          setDireccion('atras')
          dispatch(cambiarPaginaActualAnterior(1))
        }}
        ></i>
        <i className="fa-solid fa-arrow-rotate-right iconoMenu" aria-label='RESET' onClick={() => {
          setValorBusqueda("")
          dispatch(setvectorpokemonfusion())
          dispatch(onResetPaginas())
        }}></i>
        <form onSubmit={(e)=>{
          setOnSubmit(true);
          onHandledSubmit(e)}}>
          <input type="text" className='form-control input1 ' placeholder='Search'
            value={valorBusqueda}
            onChange={(e) => {
             
              setValorBusqueda(e.target.value)
 
            }}
          />

        </form>
        <i className="fa-solid fa-magnifying-glass iconoMenu" onClick={(e)=>{onHandledSubmit(e)}}></i>
        <i className="fa-solid fa-arrow-right iconoMenu" onClick={() => {
          setDireccion('adelante')
          dispatch(cambiarPaginaActualSiguiente(1))
        }}></i>

      </div>


    </>
  )
}

