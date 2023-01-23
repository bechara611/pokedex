import React from 'react'
import './CardPoke.css'


export const CardPoke = ({sprite}) => {
   
    return (
        <>
            <div className="card col-3">
                <img className='card-img-top' src={sprite} alt="Card image cap" />
                   
                        <p className="card-text">BACK</p>
                
              
            </div>

        </>
    )
    }
//  <CardPoke sprite={pokemonActivo?.sprites?.back_default}></CardPoke>

