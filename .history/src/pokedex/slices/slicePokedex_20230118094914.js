import { createSlice } from '@reduxjs/toolkit'

const initialState = {
pokemonActivo:{},
vectorPokemones:[{}],
totalActual:null
}

const slicePokedex = createSlice({
  name: 'slicePokedex',
  initialState,
  reducers: {
    setPokemonActivo:(state,action)=>{
        state.pokemonActivo=action.payload;
    }
  }
});

export const {setPokemonActivo} = slicePokedex.actions

export default slicePokedex