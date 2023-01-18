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
    },
    settotalActual:(state,action)=>{
        state.totalActual=action.payload
    }
  }
});

export const {setPokemonActivo,settotalActual} = slicePokedex.actions

export default slicePokedex