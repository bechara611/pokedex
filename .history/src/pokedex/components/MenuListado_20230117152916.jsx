import React, { useState } from 'react'
import './Menulistado.css'
export const MenuListado = () => {
  {/*COMPONENTE QUE MUESTRA UN MENU EN LA PARTE SUPERIOR DONDE ESTA EL INPUT BUSCAR Y LAS FLECHAS DE NEXT Y ANTERIOR*/ }
  const [valorBusqueda, setValorBusqueda] = useState('')
  return (

    <>
      {/*TODO terminar el menu listado}*/}

      <div className=" contenedor-menu col-12">
        <i className="fa-solid fa-arrow-left iconoMenu"></i>
        <form>
        <input type="text" className='form-control input1 ' placeholder='SEARCH A POKEMON'
        value={valorBusqueda}
        onChange={(e)=>{setValorBusqueda(e.target.value)}}
        />
        </form>
        <i className="fa-solid fa-arrow-right iconoMenu"></i>
      </div>

    </>
  )
}
