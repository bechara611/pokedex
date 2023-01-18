import React from 'react'
import './Marcos.css' 
import charmander from './../../assets/charmander.svg'
import pikachu from './../../assets/pikachu.svg'
import psyduck from './../../assets/psyduck.svg'
import zubat from './../../assets/zubat.svg'
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
                    <div className="centro col-12 animate__animated animate__fadeInRightBig">
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
