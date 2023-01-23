import React from 'react'
import './CardPoke.css'


export const CardPoke = ({sprite,type=''}) => {
   
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

    export const CardPoke2= ({sprite,type=''}) => {
   
        return (
            <>
                <div className="col-3">
              
                    <img className='' src={sprite} alt="Card image cap" />

                </div>
    
            </>
        )
        }
//  <CardPoke sprite={pokemonActivo?.sprites?.back_default}></CardPoke>

