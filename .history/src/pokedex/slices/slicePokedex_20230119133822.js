import { createSlice } from '@reduxjs/toolkit'

const initialState = {
pokemonActivo:[],
vectorPokemones:{},
vectorPokemonesCompletado:[],
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
  
        state.vectorPokemones=action.payload
    },
    setvectorPokemonesCompleto:(state,action)=>{
  
        state.vectorPokemonesCompletado=action.payload
    },
    setBusquedaPokemon:(state,action)=>{
      state.vectorPokemones= state.vectorPokemones.filter((pokemon)=>{
        if(pokemon.name!==undefined){
        console.log(action.payload)
        let name=pokemon.name
          let regularE= new RegExp(`^${action.payload}`, "*$")
     if(name.match(regularE)){ 
     
      return pokemon.name}}})
     
    }
    
  }
});

export const {setPokemonActivo,settotalActual,setvectorPokemones,setvectorPokemonesCompleto,setBusquedaPokemon} = slicePokedex.actions

export default slicePokedex