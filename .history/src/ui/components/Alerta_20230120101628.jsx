import React, { useState } from 'react'
import './Alerta.css'
export const Alerta = () => {
    const [mensaje, setMensaje] = useState(' NO DATA FOUND.')
    setInterval(() => {
        setMensaje('NO DATA FOUND 2')
        console.log('1')
    }, 1000);
    return (
        <>
        <div className="col-12 contenedor-alerta">
            <div className="alert alert-danger alerta" role="alert">
          {mensaje}     </div>
            </div>
        </>
    )
}
