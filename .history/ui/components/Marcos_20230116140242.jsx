import React from 'react'
import './Marcos.css'
export const Marcos = ({ children }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row fila1">
                    <div className="col-6 cuadrado"></div>
                    <div className="col-6 cuadrado"></div>
                </div>
                <div className="row fila2">
                    <div className="col-6 cuadrado"></div>
                    <div className="col-6 cuadrado"></div>
                </div>
            </div>
        </>
    )
}
