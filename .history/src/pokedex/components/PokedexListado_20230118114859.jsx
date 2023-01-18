import React, { useEffect, useState } from 'react'
import './PokedexListado.css'
import { MenuListado } from './MenuListado'
import { useNavigate } from 'react-router'
import { obtenerTodo } from '../../api/pokedexAPI'
import { usePokedex } from '../../hooks/usePokedex'
import { useSelector } from 'react-redux'
export const PokedexListado = () => {
    {/**ESTE COMPONENTE ES EL PRIMERO QUE SE MUESTRA, LISTADO DE TODOS LOS POKEMON*/ }
    const {vectorPokemones} = useSelector((state)=>state.pokedex)
    const {GetAPI,getObtenerImagenes} = usePokedex();
    const navigate = useNavigate();
   
    useEffect(() => {
      GetAPI();
     getObtenerImagenes(vectorPokemones)
    
    },[])
   
    
    
    /*  //TODO cambiar esto por el estado del redux*/
    const [pokemones, setpokemones] = useState([{
        url: 'url1',
        name: 'Pikachu'
    }])


    const onGoPaginaDetalle=(value)=>{
    {/*TODO*Recuerda que aca debes hacer ir a la pagina del detalle segun el numero de pokemon */}
    navigate(`/pokemon/${value}`)
    }
    return (
        <>

            <div className="col-12 contenedor-listado ">
                <MenuListado></MenuListado>
                {        /*TODO debes hacer la parte del back que se traiga las imagenes de todos */}


                {       /*TODO generar ()=>las cajas con las(2)imagenes de los pokemon SON 48*/}

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png" className='col-xl-1 col-md-2 col-3 imagenPokemon '
                onClick={()=>onGoPaginaDetalle(2)}
                alt="" />


                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" className='col-xl-1 col-md-2 col-3  ' alt="" />
               

                </div>

        </>
    )
}
