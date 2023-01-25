import React from 'react'

export const Status = (objeto={h:12,j:123}) => {
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
