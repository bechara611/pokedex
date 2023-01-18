import { createSlice } from '@reduxjs/toolkit'

const initialState = {
pokemonActivo:{},
vectorPokemones:[{}]
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