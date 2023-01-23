import { createSlice } from '@reduxjs/toolkit'

const initialState = {
ListaPage:true,
DetallePage:false,
paginaActual:1,
paginaAnterior:0,
resultadoPaginaActual:48,
busqueda:false,
isError:false,
isLoading:false,
}

const uiSlice = createSlice({
  name: 'redux-interfaz',
  initialState,
  reducers: {
    cambiarPaginaActualSiguiente:(state,action)=>{
 
      if(action.payload===1){
        state.paginaActual=state.paginaActual+1;
        state.paginaAnterior=state.paginaAnterior+1;
      }
    },
    cambiarPaginaActualAnterior:(state,action)=>{
    
  
      if(action.payload===1 && state.paginaActual>1 && state.paginaAnterior>0){
        state.paginaActual=state.paginaActual-1;
        state.paginaAnterior=state.paginaAnterior-1;
      }
    },
    onAplicoBusqueda:(state,action)=>{
      if(action.payload===1){
        state.busqueda=true
      }else{
        state.busqueda=false
      }
   
      
    },
    onResetPaginas:(state,action)=>{
      state.ListaPage=true,
      state.DetallePage=false,
      state.paginaActual=1,
      state.paginaAnterior=0,
      state.resultadoPaginaActual=48,
      state.busqueda=false,
      state.isError=false
    },
    setisError:(state,action)=>{
      if(action.payload===1){   state.isError=true;} else{ state.isError=false;}
   
    },
    setisLoading:(state,action)=>{
      if(action.payload===1){
        state.isLoading=true
      }else{
        state.isLoading=false
      }
    }
  }
});

export const {cambiarPaginaActualSiguiente,cambiarPaginaActualAnterior,onAplicoBusqueda,onResetPaginas,setisError,setisLoading} = uiSlice.actions

export default uiSlice