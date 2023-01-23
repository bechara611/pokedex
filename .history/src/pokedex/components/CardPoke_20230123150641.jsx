import React from 'react'
import './CardPoke.css'


export const CardPoke = ({sprite}) => {
   
    return (
        <>
            <div className="card col-2">
                <img className='card-img-top' src={sprite} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk</p>
                    </div>
              
            </div>

        </>
    )
    }
//  <CardPoke sprite={pokemonActivo?.sprites?.back_default}></CardPoke>

