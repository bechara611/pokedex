import React from 'react'
import './CardPoke.css'


export const CardPoke = ({sprite,type=''}) => {
   
    return (
        <>
            <div className="card col-6">
                <img className='card-img-top' src={sprite} alt="Card image cap" />
                <div className="card-body">
                <p className="card-text">Some.</p>
              </div>
            </div>

        </>
    )
    }
//  <CardPoke sprite={pokemonActivo?.sprites?.back_default}></CardPoke>

