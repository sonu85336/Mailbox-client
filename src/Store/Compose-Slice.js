import { createSlice } from "@reduxjs/toolkit";
export const composeSlice = createSlice({
    name:'compose',
    initialState:{composeisopen:false},
        reducers:{
            composeHandler(state,action){
                state.composeisopen = action.payload;
            },
        }
    
})
export const composeActions = composeSlice.actions;