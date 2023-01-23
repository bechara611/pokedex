import React from 'react'
import './CardPoke.css'


export const CardPoke = ({sprite}) => {
   
    return (
        <>
            <div className="card col-3">
            <h5 className="card-title">BACK</h5>
                <img className='card-img-top' src={sprite} alt="Card image cap" />
                
              
            </div>

        </>
    )
    }
//  <CardPoke sprite={pokemonActivo?.sprites?.back_default}></CardPoke>

