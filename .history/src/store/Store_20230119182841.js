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
    },
    devTools: { 
        // options as if you were setting it up by hand
        // https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#windowdevtoolsextensionconfig
        stateSanitizer: (state) => state.data ? { ...state, data: '<<LONG_BLOB>>' } : state
      }
    
})

