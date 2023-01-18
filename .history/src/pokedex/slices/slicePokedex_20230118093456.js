import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

const slicePokedex = createSlice({
  name: 'slicePokedex',
  initialState,
  reducers: {
    setPokemonActivo:(state,action)=>{

    }
  }
});

export const {setPokemonActivo} = slicePokedex.actions

export default slicePokedex