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
    cambiarPaginaActual:(state,action)=>{
      if(state.paginaAnterior!=0){ state.paginaAnterior=paginaActual-1}
     if(state.paginaAnterior!=0) {state.paginaActual=paginaActual+1}else{e.paginaActual=1}
      state.resultadoPaginaActual=paginaActual*48
    }
  }
});

export const {cambiarPaginaActual} = uiSlice.actions

export default uiSlice