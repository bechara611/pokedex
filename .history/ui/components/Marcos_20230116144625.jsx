import React from 'react'
import './Marcos.css'
import charmander from './../../src/assets/charmander.svg'
import pikachu from './../../src/assets/pikachu.svg'
import psyduck from './../../src/assets/psyduck.svg'
import zubat from './../../src/assets/zubat.svg'
export const Marcos = ({ children }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="contenedor">
                    <div className="row fila">
                        <img src={charmander} className='iconos' alt="" />
                        <img src={pikachu} className='iconos' alt="" />
                    </div>
                    <div className="centro col-12"></div>
                    <div className="row fila">
                        <img src={psyduck} className='iconos' alt="" />
                        <img src={zubat} className='iconos' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
