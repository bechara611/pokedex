import { useState } from "react";
import { useDispatch } from "react-redux";
import { obtenerTodo } from "../api/pokedexAPI";
import { settotalActual, setvectorPokemones } from "../pokedex/slices/slicePokedex";

export const usePokedex =()=>{
    const dispatch = useDispatch();
    let vectorTemporal=[];
    const [vectorPokemonesTemporal, setVectorPokemonesTemporal] = useState([{}])
//hook que servira para ser utilizado el llamado de las api y luego los dispatch del slice
//Obtenemos del metodo de API los resultados de los pokemon para primero guardar cuantos son en total,
    const GetAPI=async()=>{
        try {
             const resultado = await obtenerTodo();
           //  console.log(resultado.data.results[0])
        
            
             if(resultado){
                for(let i=0; i<=resultado.data.results.length;i++){
                    vectorTemporal.push(  resultado.data.results[i].name)
                    console.log(resultado.data.results[i].name)

                //  dispatch(setvectorPokemones(resultado.data.results[i]))
                 }
                //aca pasas la informacion del nombre y web de cada pokemon
                dispatch(settotalActual(resultado.data.count))
                //aca se pone el total de pokemon, es un numero que me da la API
                dispatch(setvectorPokemones(vectorTemporal))
             }
        } catch (error) {
            console.log(error)
        }
     
    }
    return{
        //metodos
        GetAPI

    }
}