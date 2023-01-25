import React from 'react'

export const Status = (objeto={}) => {
    console.log(objeto)
  return (
    <>
    <div>status</div>
    {
        objeto.keys(valor).map((key,index)=>{
            return(
                <h5>{valor[key]}</h5>
            )
        })
    }   
    </>
  )
}
