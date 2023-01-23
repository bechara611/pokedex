import React from 'react'
import './CardPoke.css'
import img from './../../img/notfound.png'

export const CardPoke = ({ sprite, type = '' }) => {

    return (
        <>
            <div className="card col-3">

                <img className='card-img-top' src={sprite} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Some.</p>
                </div>
            </div>

        </>
    )
}

export const CardPoke2 = ({ sprite=img, type = '' }) => {

    return (
        <>
            <div className=" col-md-3 col-4 contenedor-img">

                <img className='img-detalle' src={sprite ? } alt="Card image cap" />
                <p>{type}</p>
            </div>

        </>
    )
}
//  <CardPoke sprite={pokemonActivo?.sprites?.back_default}></CardPoke>

