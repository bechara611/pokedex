import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cambiarPaginaActualAnterior, cambiarPaginaActualSiguiente } from '../../ui/slices/uiSlice';
import './Menulistado.css'

export const MenuListado = () => {
  {/*COMPONENTE QUE MUESTRA UN MENU EN LA PARTE SUPERIOR DONDE ESTA EL INPUT BUSCAR Y LAS FLECHAS DE NEXT Y ANTERIOR*/ }
  const [valorBusqueda, setValorBusqueda] = useState('');
  const [Direccion, setDireccion] = useState('');
  const { vectorPokemones, vectorPokemonesCompletado } = useSelector((state) => state.pokedex)
  const { paginaActual } = useSelector((state) => state.ui)
  const dispatch = useDispatch();
  /*Metodo submit para que al dar enter generar la busqueda del pokemon */
  const onHandledSubmit = (e) => {
    e.preventDefault();
    //TODO debes realizar el metodo de filtrar el vector completo para que salga solo los parecidos al valor.
  }
  useEffect(() => {
    console.log({ paginaActual: paginaActual * 48, tamano: vectorPokemones.length })

    if (vectorPokemonesCompletado.length == 0) {
      if (Direccion === 'adelante') {
        if ((paginaActual * 48) > vectorPokemones.length) {
          console.log('es mayor')
          dispatch(cambiarPaginaActualAnterior(1))
          return
        }

        dispatch(cambiarPaginaActualSiguiente(1))
      }
      if (Direccion === 'atras') {

        dispatch(cambiarPaginaActualAnterior(1))
      }


      setDireccion('')
    }
  }, [vectorPokemonesCompletado])

  return (

    <>
      <div className=" contenedor-menu col-12">
        <i className="fa-solid fa-arrow-left iconoMenu" onClick={() => {
          setDireccion('atras')
          dispatch(cambiarPaginaActualAnterior(1))
        }}></i>
        <form onSubmit={onHandledSubmit}>
          <input type="text" className='form-control input1 ' placeholder='Search'
            value={valorBusqueda}
            onChange={(e) => { setValorBusqueda(e.target.value) }}
          />
        </form>
        <i className="fa-solid fa-arrow-right iconoMenu" onClick={() => {
          setDireccion('adelante')
          dispatch(cambiarPaginaActualSiguiente(1))
        }}></i>

      </div>


    </>
  )
}

