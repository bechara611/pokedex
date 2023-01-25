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
                                <div className="progress" style={{height:"10%"}}>
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%",height:"10%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>

                                </div>
                            </div>


                        </>
                    )
                })
            }
        </>
    )
}
