import React, { useState } from 'react'
import './PokedexListado.css'
import { MenuListado } from './MenuListado'
import { useNavigate } from 'react-router'
export const PokedexListado = () => {
    {/**ESTE COMPONENTE ES EL PRIMERO QUE SE MUESTRA, LISTADO DE TODOS LOS POKEMON*/ }
    /*  //TODO cambiar esto por el estado del redux*/
    const [pokemones, setpokemones] = useState([{
        url: 'url1',
        name: 'Pikachu'
    }])
    const navigate = useNavigate();

    const onGoPaginaDetalle=(value)=>{
        navigate(`/pokemon/${value}`)
    }
    return (
        <>

            <div className="col-12 contenedor-listado ">
                <MenuListado></MenuListado>
                {        /*TODO debes hacer la parte del back que se traiga las imagenes de todos */}


                {       /*TODO generar las cajas con las(2)imagenes de los pokemon*/}

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3 imagenPokemon '
                onClick={onGoPaginaDetalle(2)}
                alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-lg-1 col-md-2 col-3  ' alt="" />
            </div>

        </>
    )
}
