import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './Alerta.css'
export const Alerta = () => {
    const [mensaje, setMensaje] = useState(' NO DATA FOUND.')
    const dispatch = useDispatch();
setTimeout(() => {
    console.log('1')
}, 5000);

setInterval(() => {
    console.log(2)
}, 2000);

    
    return (
        <>
        <div className="col-12 contenedor-alerta ">
            <div className="alert alert-danger alerta animate__animated animate__slideInDown" role="alert">
          {mensaje}     </div>
            </div>
        </>
    )
}
