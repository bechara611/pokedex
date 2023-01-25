import React from 'react'

export const Status = ({objeto={}}) => {
    let objetito={
        valor1:1,
        valor2:2
    }
  return (
    <>
    <div>status</div>
    {
        Object.keys(objeto).map((key,index)=>{
            console.log(objetito[key])
            return(
                <></>
            )
        })
    }   
    </>
  )
}
