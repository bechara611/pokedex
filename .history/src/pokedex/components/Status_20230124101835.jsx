import React from 'react'
import './Status.css'
export const Status = ({ objeto = { value: 100, type: 'HP' } }) => {
    console.log(objeto)
    return (
        <>

            {
                Object.keys(objeto).map((key, index) => {
                    // console.log(objeto[key])
                    return (
                        <>
                        <p>Hola</p>
                            <div className="col-12 contenedor-barra">
                         
                                <div className="progress col-8" >
                               
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: "100%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    <p>{123}</p>
                                </div>
                            </div>


                        </>
                    )
                })
            }
        </>
    )
}
