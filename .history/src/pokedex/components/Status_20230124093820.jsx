import React from 'react'

export const Status = ({ objeto = { value: 100, type: 'HP' } }) => {
    console.log(objeto)
    return (
        <>

            {
                Object.keys(objeto).map((key, index) => {
                    // console.log(objeto[key])
                    return (
                        <>
                            <h5>{objeto[key].stat.name}</h5>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}
