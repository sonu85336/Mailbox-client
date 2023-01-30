import { createSlice } from "@reduxjs/toolkit";

export const mailSlice  = createSlice({
    name:'dataget',
    initialState:{mail:[]},
    reducers:{
        addmail(state,action){
            state.mail= [...state.mail,action.payload]


        }
    }
})

export const mailActions =  mailSlice.actions;
