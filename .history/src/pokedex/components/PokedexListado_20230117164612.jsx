import React, { useState } from 'react'
import './PokedexListado.css'
import { MenuListado } from './MenuListado'
export const PokedexListado = () => {
    {/**ESTE COMPONENTE ES EL PRIMERO QUE SE MUESTRA, LISTADO DE TODOS LOS POKEMON*/ }
    /*  //TODO cambiar esto por el estado del redux*/
    const [pokemones, setpokemones] = useState([{
        url: 'url1',
        name: 'Pikachu'
    }])
    return (
        <>

            <div className="col-12 contenedor-listado ">
                <MenuListado></MenuListado>
                {        /*TODO debes hacer la parte del back que se traiga las imagenes de todos */}


                {       /*TODO generar las cajas con las imagenes de los pokemon de forma esq
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />ueleto por ahora*/}
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-md-1 col-3  ' alt="" />
                
                {

                }

            </div>

        </>
    )
}
