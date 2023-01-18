import React, { useState } from 'react'
import './Menulistado.css'

export const MenuListado = () => {
  {/*COMPONENTE QUE MUESTRA UN MENU EN LA PARTE SUPERIOR DONDE ESTA EL INPUT BUSCAR Y LAS FLECHAS DE NEXT Y ANTERIOR*/ }
  const [valorBusqueda, setValorBusqueda] = useState('');

  /*Metodo submit para que al dar enter generar la busqueda del pokemon */
  const onHandledSubmit = (e) => {
    e.preventDefault();
    //TODO debes realizar el metodo de filtrar el vector completo para que salga solo los parecidos al valor.
  }
  return (

    <>
      <div className=" contenedor-menu col-12">
        <i className="fa-solid fa-arrow-left iconoMenu"></i>
        <form onSubmit={onHandledSubmit}>
          <input type="text" className='form-control input1 ' placeholder='SEARCH A POKEMON'
            value={valorBusqueda}
            onChange={(e) => { setValorBusqueda(e.target.value) }}
          />
        </form>
        <i className="fa-solid fa-arrow-right iconoMenu"></i>
      </div>

    </>
  )
}

export const MenuListadoInferior = ()=>{
return(
  <>
  <div className="col-12">
  <i className="fa-solid fa-arrow-left iconoMenu"></i>
  <i className="fa-solid fa-arrow-right iconoMenu"></i>
  </div>
  </>
)
}
