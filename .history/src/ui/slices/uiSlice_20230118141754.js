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
    changeUI:(state,action)=>{}
  }
});

export const {changeUI} = uiSlice.actions

export default uiSlice