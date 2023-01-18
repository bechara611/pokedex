import { useDispatch } from "react-redux";
import { axiosInstance } from "./axioInstancia"

export const obtenerTodo=async()=>{
   
    try {
        const resultado = await axiosInstance.get('?limit=100000&offset=0');
       return resultado;
    } catch (error) {
        console.log(error)
    }
}