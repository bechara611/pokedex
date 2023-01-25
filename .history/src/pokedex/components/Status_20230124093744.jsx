import React from 'react'

export const Status = ({objeto={value:100,type:'HP'}}) => {
    console.log(objeto)
  return (
    <>
 
    {
        Object.keys(objeto).map((key,index)=>{
           // console.log(objeto[key])
            return(
                <>
                <h5>{objeto[key].stat.name}</h5>
                </>
            )
        })
    }   
    </>
  )
}
