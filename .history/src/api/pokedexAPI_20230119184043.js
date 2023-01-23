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

export const obtenerImagenes = async (vector = [],hasta=48,desde=0) => {
    try {
    
        let vectorImagenes = []
       
        for(let i=0;i<=vector.length-1 ;i++){
           //* console.log(vector[i].url)
           //*aca me esta lanzando error el redux con lo grande que es el objeto por ende
           //*lo que se hace es que solo me traiga la info del numero de elementos que estoy mostrando, 
           //*o sea empieza con 48 ya luego dependiendo de la pagina mostrara mas
            if(vector[i].url!==undefined && vector[i].url!==null && vector[i].url.length>0){
              //  console.log(vector[i].url)
              //*YA QUE LA API NO ME TRAE LAS IMAGEENS Y TAMPOCO PUEDO GUARDAR TODO EL VECTOR EN EL STORE, CON EL DESDE Y HASTA JUEGO LOS VALORES DEL MISMO
             if(i>=desde && i<hasta){
                const {data}=await axios.get(vector[i].url)
              //  console.log(data)
                if(data.sprites.front_default!==null){
                 //   console.log(data.sprites.front_default)
                    vectorImagenes.push(data)
                }
                if(data.sprites.front_default===null){
                    //   console.log(data.sprites.front_default)
                      //  console.log(data)
                   }
           
             }
              
            }
        
        
            // / imagen = await axios.get(pokemon.url);
        }
       
       for (let i = 0; i < vectorImagenes.length; i++) {
        console.log(i)
        
       }
       

        return vectorImagenes

    } catch (error) {
        console.log(error)
        return null
    }
}