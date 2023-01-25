import React from 'react'

export const Status = (objeto={h:12,j:123}) => {
    
  return (
    <>
    <div>status</div>
    {
        Object.keys(objeto).map((key,index)=>{
            console.log(objeto)
            return(
                <></>
            )
        })
    }   
    </>
  )
}
