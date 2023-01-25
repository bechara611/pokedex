import React from 'react'

export const Status = (objeto={}) => {
    
  return (
    <>
    <div>status</div>
    {
        Object.keys(objeto).map((key,index)=>{
            console.log(key)
            return(
                <></>
            )
        })
    }   
    </>
  )
}
