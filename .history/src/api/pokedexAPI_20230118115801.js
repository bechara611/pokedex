import axios from "axios";
import { useDispatch } from "react-redux";
import { axiosInstance } from "./axioInstancia"

//metodos para obtener de la API, son metodos asyncronos que luego seran llamados en usePokedex para obtener la data
export const obtenerTodo = async () => {

    try {
        const resultado = await axiosInstance.get('?limit=100000&offset=0');
        return resultado;
    } catch (error) {
        console.log(error)
    }
}

export const obtenerImagenes = async (vector = []) => {
    try {
        let vectorImagenes = {}
        let imagen;

        for(let i=0;i<vector.length;i++){
            console.log(vector[i].url)
            // / imagen = await axios.get(pokemon.url);
        }


            
        


      
        return vectorImagenes

    } catch (error) {

    }
}