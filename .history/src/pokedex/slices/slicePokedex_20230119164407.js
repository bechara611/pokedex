import { createSlice } from '@reduxjs/toolkit'

const initialState = {
pokemonActivo:[],
vectorPokemones:{},
vectorPokemones2:{},
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
    setvectorPokemones2:(state,action)=>{
  
      state.vectorPokemones2=action.payload
  },
    setvectorPokemonesCompleto:(state,action)=>{
  
        state.vectorPokemonesCompletado=action.payload
    },
    setBusquedaPokemon:(state,action)=>{
      state.vectorPokemones= state.vectorPokemones.filter((pokemon)=>{
        if(pokemon.name!==undefined){
        console.log(action.payload)
        let name=pokemon.name
        let myReg = new RegExp("^"+action.payload + ".*$")
     if(name.match(myReg)){ 
     
      return pokemon.name}}})
     
    }
    
  }
});

export const {setPokemonActivo,settotalActual,setvectorPokemones,setvectorPokemonesCompleto,setBusquedaPokemon} = slicePokedex.actions

export default slicePokedex