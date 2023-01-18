import { createSlice } from '@reduxjs/toolkit'

const initialState = {
pokemonActivo:[],
vectorPokemones:[],
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
    },
    setvectorPokemones:(state,action)=>{
      console.log({action:action.payload[0]})
        state.vectorPokemones.push(action.payload)
    }
  }
});

export const {setPokemonActivo,settotalActual,setvectorPokemones} = slicePokedex.actions

export default slicePokedex