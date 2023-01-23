import React, { useState } from 'react'
import './Alerta.css'
export const Alerta = () => {
    const [mensaje, setMensaje] = useState(' NO DATA FOUND.')
  
    setTimeout(() => {
        setMensaje('NO DATA FOUND 2')
        console.log('1')
        clearTimeout();
    }, 1000,);
    
    return (
        <>
        <div className="col-12 contenedor-alerta">
            <div className="alert alert-danger alerta" role="alert">
          {mensaje}     </div>
            </div>
        </>
    )
}
