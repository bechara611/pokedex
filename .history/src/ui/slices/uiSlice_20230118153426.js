import { createSlice } from '@reduxjs/toolkit'

const initialState = {
ListaPage:true,
DetallePage:false,
paginaActual:1,
paginaAnterior:0,
resultadoPaginaActual:48
}

const uiSlice = createSlice({
  name: 'redux-interfaz',
  initialState,
  reducers: {
    cambiarPaginaActualSiguiente:(state,action)=>{
      if(state.paginaAnterior!=0){ state.paginaAnterior=state.paginaActual-1}
     if(state.paginaAnterior!=0) {state.paginaActual=state.paginaActual+1}else{state.paginaActual=1}
      state.resultadoPaginaActual=state.paginaActual*48

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
    }
  }
});

export const {cambiarPaginaActualSiguiente,cambiarPaginaActualAnterior} = uiSlice.actions

export default uiSlice