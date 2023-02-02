import { createSlice } from "@reduxjs/toolkit";
export const composeSlice = createSlice({
    name:'compose',
    initialState:{composeisopen:false,mailisopen:false},
        reducers:{
            composeHandler(state,action){
                state.composeisopen = action.payload;
            },
            mailpageHandler(state,action){
                state.mailisopen = action.payload;
            }
        }
    
})
export const composeActions = composeSlice.actions;