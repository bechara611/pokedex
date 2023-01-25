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
                           
                            <div className="progress mt-3">
                                <div className="progress-bar bg-success" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        
                        </>
                    )
                })
            }
        </>
    )
}
