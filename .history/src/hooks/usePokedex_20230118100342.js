import { useState } from "react";
import { useDispatch } from "react-redux";
import { obtenerTodo } from "../api/pokedexAPI";
import { settotalActual } from "../pokedex/slices/slicePokedex";

export const usePokedex =()=>{
    const dispatch = useDispatch();
    const [vectorPokemonesTemporal, setVectorPokemonesTemporal] = useState([{}])
//hook que servira para ser utilizado el llamado de las api y luego los dispatch del slice
//Obtenemos del metodo de API los resultados de los pokemon para primero guardar cuantos son en total,
    const GetAPI=async()=>{
        try {
             const resultado = await obtenerTodo();
             console.log(resultado)
             if(resultado){
                dispatch(settotalActual(resultado.data.count))
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