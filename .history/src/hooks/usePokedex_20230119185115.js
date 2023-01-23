import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerImagenes, obtenerTodo } from "../api/pokedexAPI";
import { settotalActual, setvectorPokemones, setvectorPokemones2, setvectorPokemonesCompleto } from "../pokedex/slices/slicePokedex";

export const usePokedex =()=>{
    //vamos a obtener del store la variable para saber si esta o no esta buscando un valor especifico
    const {busqueda} = useSelector((state)=>state.ui)
    //hook que servira para ser utilizado el llamado de las api y luego los dispatch del slice
    const dispatch = useDispatch();
    let vectorTemporal=[];

//Obtenemos del metodo de API los resultados de los pokemon para primero guardar cuantos son en total,
    const GetAPI=async()=>{
        try {
             const resultado = await obtenerTodo();
           //  console.log(resultado.data.results[0])
        
            
             if(resultado){
                for(let i=0; i<=resultado.data.results.length;i++){
                    vectorTemporal.push(  {...resultado.data.results[i]})
                 }
                //aca pasas la informacion del nombre y web de cada pokemon
                dispatch(settotalActual(resultado.data.count))
                //aca se pone el total de pokemon, es un numero que me da la API
                dispatch(setvectorPokemones(vectorTemporal))
                dispatch(setvectorPokemones2(vectorTemporal))
                return true;
             }
        } catch (error) {
            console.log(error)
        }
     
    }

    const getObtenerImagenes=async(vector=[],hasta=48,desde=0)=>{
        let resultado;
        if(busqueda===false){ resultado = await obtenerImagenes(vector,hasta,desde)}
        if(busqueda===true){ resultado = await obtenerImagenes(vector,vector.length,0)}
       
    
      dispatch(setvectorPokemonesCompleto(resultado))
      return true;
    }
    return{
        //metodos
        GetAPI,
        getObtenerImagenes

    }
}