import React from 'react'
import './Marcos.css'
import charmander from './../../src/assets/charmander.svg'
import pikachu from './../../src/assets/pikachu.svg'
import psyduck from './../../src/assets/psyduck.svg'
import zubat from './../../src/assets/zubat.svg'
export const Marcos = ({ children }) => {
    return (
        <>
            <div className="container-fluid animate__animated animate__bou">
                <div className="contenedor">
                    <div className="row fila">
                        <img src={charmander} className='iconos' alt="" />
                        <img src={pikachu} className='iconos' alt="" />
                    </div>
                    <div className="centro col-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, officia quasi. Praesentium, quo soluta incidunt maiores voluptatum nisi sequi natus repellat cumque ullam quisquam quos, officiis aliquam debitis explicabo asperiores veritatis. Quasi esse repudiandae officiis accusantium quam amet tempore incidunt inventore dolorum fuga, animi id placeat exercitationem, eos sed laudantium?
                    </div>
                    <div className="row fila">
                        <img src={psyduck} className='iconos' alt="" />
                        <img src={zubat} className='iconos' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
