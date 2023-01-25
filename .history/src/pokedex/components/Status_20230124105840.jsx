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

                            <div className="col-12 contenedor-barra">
                           
                                <div className="progress col-8" >
                                <div className="col-12 bg-info">  <p className='nombre-status'>{objeto[key].stat.name}</p></div>
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: "100%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    
                                </div>
                                <p className='status-value'>{objeto[key].base_stat}</p>
                            </div>
                            <div className="col-12">
                            <p>Lorem ipsum dolor sit amet.</p>
                            </div>

                        </>
                    )
                })
            }
        </>
    )
}
