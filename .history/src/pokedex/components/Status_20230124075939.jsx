import React from 'react'

export const Status = (objeto={}) => {
    console.log(objeto)
  return (
    <>
    <div>status</div>
    {
        Object.keys(objeto).map((key,index)=>{
            return(
                <h5>{key} : {objeto[key]}</h5>
            )
        })
    }   
    </>
  )
}
