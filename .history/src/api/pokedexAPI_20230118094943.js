import { useDispatch } from "react-redux";
import { axiosInstance } from "./axioInstancia"

export const obtenerTodo=async()=>{
    const dispatch = useDispatch();
    try {
        const resultado = await axiosInstance.get();
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}