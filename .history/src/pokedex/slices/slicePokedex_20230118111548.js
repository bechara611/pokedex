import { createSlice } from '@reduxjs/toolkit'

const initialState = {
pokemonActivo:[],
vectorPokemones:{},
vectorPokemonesObjeto:{},
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
     
        state.vectorPokemones.push(action.payload)
    },
    
  }
});

export const {setPokemonActivo,settotalActual,setvectorPokemones} = slicePokedex.actions

export default slicePokedex