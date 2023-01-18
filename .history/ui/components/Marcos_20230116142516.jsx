import React from 'react'
import './Marcos.css'
import svgPokeball from './../../src/assets/pokedex.svg'
export const Marcos = ({ children }) => {
    return (
        <>
            <div className="container-fluid">
            <div className="contenedor">
                <div className="row fila">
                    <div className="col-6 cuadrado"><img src={svgPokeball} className='pokeball' alt="" /></div>
                    <div className="col-6 cuadrado"></div>
                </div>
                <div className="centro"></div>
                <div className="row fila">
                    <div className="col-6 cuadrado"></div>
                    <div className="col-6 cuadrado"></div>
                </div>
                </div>
            </div>
        </>
    )
}
