import React from 'react'
import './CardPoke.css'
export const CardPoke = (sprite) => {
    console.log(sprite)
    return (
        <>
            <div className="card">
                <img className='card-img-top' src={sprite} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk</p>
                    </div>
            </div>

        </>
    )
    }


