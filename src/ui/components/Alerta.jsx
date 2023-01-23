import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setisError } from '../slices/uiSlice'
import './Alerta.css'
export const Alerta = () => {
    const [mensaje, setMensaje] = useState(' NO DATA FOUND.')
    const dispatch = useDispatch();
setTimeout(() => {
    dispatch(setisError(0));
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
