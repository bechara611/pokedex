import { useDispatch } from "react-redux";
import { obtenerTodo } from "../api/pokedexAPI";
import { settotalActual } from "../pokedex/slices/slicePokedex";

export const usePokedex =()=>{
    const dispatch = useDispatch();


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