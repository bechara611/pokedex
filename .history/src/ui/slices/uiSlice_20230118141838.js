import { createSlice } from '@reduxjs/toolkit'

const initialState = {
ListaPage:true,
DetallePage:false,
paginaActual:1,
resultadoPaginaActual:48
}

const uiSlice = createSlice({
  name: 'redux-interfaz',
  initialState,
  reducers: {
    cambiarPaginaActual:(state,action)=>{
      state.paginaActual=paginaActual+1;
      state.resultadoPaginaActual=paginaActual*48
    }
  }
});

export const {changeUI} = uiSlice.actions

export default uiSlice