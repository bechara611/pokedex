import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pokemonActivo: [],
  vectorPokemones: {},
  vectorPokemones2: {},
  vectorPokemonesCompletado: [],
  totalActual: null,
  errorBusqueda: false
}

const slicePokedex = createSlice({
  name: 'slicePokedex',
  initialState,
  reducers: {
    setPokemonActivo: (state, action) => {
      state.pokemonActivo = action.payload;
    },
    settotalActual: (state, action) => {
      state.totalActual = action.payload
    },
    setvectorPokemones: (state, action) => {
      console.log(action)
      state.vectorPokemones = action.payload
    },
    setvectorPokemones2: (state, action) => {

      state.vectorPokemones2 = action.payload
    },
    setvectorPokemonesCompleto: (state, action) => {
      state.vectorPokemonesCompletado = [],
        state.vectorPokemonesCompletado = action.payload
    },
    setBusquedaPokemon: (state, action) => {
      state.vectorPokemones = state.vectorPokemones2.filter((pokemon) => {
        let name;
        let myReg
        if (pokemon.name !== undefined) {

          name = pokemon.name
          myReg = new RegExp("^" + action.payload + ".*$")
          if (name.match(myReg)) {

            return pokemon.name
          }
        }
      })
      if (state.vectorPokemones.length === 0) {
        state.errorBusqueda = true;
      } else {
        state.errorBusqueda = false
      }
    },
    setvectorpokemonfusion: (state, action) => {
      state.vectorPokemones = state.vectorPokemones2
    },
    setErrorBusqueda: (state) => {
      state.errorBusqueda = false
    }

  }
});

export const { setErrorBusqueda, setvectorpokemonfusion, setPokemonActivo, settotalActual, setvectorPokemones, setvectorPokemonesCompleto, setBusquedaPokemon, setvectorPokemones2 } = slicePokedex.actions

export default slicePokedex