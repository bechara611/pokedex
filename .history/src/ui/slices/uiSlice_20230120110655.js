import { createSlice } from '@reduxjs/toolkit'

const initialState = {
ListaPage:true,
DetallePage:false,
paginaActual:1,
paginaAnterior:0,
resultadoPaginaActual:48,
busqueda:false,
isError:false,
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
  
        state.busqueda=true
      
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
    setisError:(state)=>{
      state.isError=true;
    }
  }
});

export const {cambiarPaginaActualSiguiente,cambiarPaginaActualAnterior,onAplicoBusqueda,onResetPaginas} = uiSlice.actions

export default uiSlice