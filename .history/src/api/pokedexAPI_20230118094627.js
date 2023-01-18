import { axiosInstance } from "./axioInstancia"

export const obtenerTodo=async()=>{
    try {
        const resultado = await axiosInstance.get();
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}