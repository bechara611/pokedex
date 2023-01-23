import React, { useState } from 'react'
import './Alerta.css'
export const Alerta = () => {
    const [mensaje, setMensaje] = useState(' NO DATA FOUND.')
  
setTimeout(() => {
    console.log('1')
}, 2000);

setInterval(() => {
    console.log(2)
}, 2000);

    
    return (
        <>
        <div className="col-12 contenedor-alerta">
            <div className="alert alert-danger alerta" role="alert">
          {mensaje}     </div>
            </div>
        </>
    )
}
