import React from 'react'
import './Marcos.css'
import charmander from './../../src/assets/charmander.svg'
export const Marcos = ({ children }) => {
    return (
        <>
            <div className="container-fluid">
            <div className="contenedor">
                <div className="row fila">
                    <img src={svgPokeball} className='pokeball' alt="" />
                    <img src={svgPokeball} className='pokeball' alt="" />
                </div>
                <div className="centro col-12"></div>
                <div className="row fila">
                <img src={svgPokeball} className='pokeball' alt="" />
                <img src={svgPokeball} className='pokeball' alt="" />
                </div>
                </div>
            </div>
        </>
    )
}
