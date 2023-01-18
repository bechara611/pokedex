import { useDispatch } from "react-redux";
import { axiosInstance } from "./axioInstancia"

export const obtenerTodo=async()=>{
   
    try {
        const resultado = await axiosInstance.get();
       return resultado;
    } catch (error) {
        console.log(error)
    }
}