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
                           
                        <div className="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                        
                        </>
                    )
                })
            }
        </>
    )
}
