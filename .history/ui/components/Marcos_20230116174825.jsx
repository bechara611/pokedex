import React from 'react'
import './Marcos.css'
import charmander from './../../src/assets/charmander.svg'
import pikachu from './../../src/assets/pikachu.svg'
import psyduck from './../../src/assets/psyduck.svg'
import zubat from './../../src/assets/zubat.svg'
export const Marcos = ({ children }) => {
    return (
        <>

            <div className="container-fluid fondo ">
                <div className="contenedor">
                    <div className="row fila">
                        <img src={charmander} className='iconos animate__animated animate__bounce' alt="" />
                        <img src={pikachu} className='iconos animate__animated animate__bounce' alt="" />
                    </div>
                   { /*ESTE ES EL DIV DEL CENTRO DONDE VA O EL CHILDREN QUE SON LOS DEMAS COMPONENTES Y TODO LO DEMAS*/}
                    <div className="centro col-12">
                  {children}
                
                    </div>
                    <div className="row fila">
                        <img src={psyduck} className='iconos animate__animated animate__bounce' alt="" />
                        <img src={zubat} className='iconos animate__animated animate__bounce' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
