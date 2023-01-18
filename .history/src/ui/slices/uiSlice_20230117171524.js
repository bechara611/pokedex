import { createSlice } from '@reduxjs/toolkit'

const initialState = {
ListaPage:true,
DetallePage:false
}

const uiSlice = createSlice({
  name: 'uiSlice',
  initialState,
  reducers: {
    changeUI:(state,action)=>{}
  }
});

export const {changeUI} = uiSlice.actions

export default uiSlice.reducer