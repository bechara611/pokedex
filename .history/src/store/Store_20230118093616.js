import { configureStore } from "@reduxjs/toolkit";
import slicePokedex from "../pokedex/slices/slicePokedex";
import uiSlice from "../ui/slices/uiSlice";

export const store = configureStore({
    reducer:{
        ui: uiSlice.reducer,
        pokedex:slicePokedex.reducer
    },
    middleware:(middleware)=>{
        return middleware({
            serializableCheck:false,
        })
    }
    
})

