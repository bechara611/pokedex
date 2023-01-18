import axios from "axios";
import { useDispatch } from "react-redux";
import { axiosInstance } from "./axioInstancia"

//metodos para obtener de la API, son metodos asyncronos que luego seran llamados en usePokedex para obtener la data
export const obtenerTodo=async()=>{

    try {
        const resultado = await axiosInstance.get('?limit=100000&offset=0');
       return resultado;
    } catch (error) {
        console.log(error)
    }
}

export const obtenerImagenes=async(vector=[])=>{
    let vectorImagenes=[]
    try {
        let imagen;
     
        vector.forEach(async(pokemon) => {
            
          imagen= await axios.get(pokemon.url)
        
    //      vectorImagenes.push=imagen.data
        });
        return imagen
    } catch (error) {
        
    }
}