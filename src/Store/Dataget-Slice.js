import { createSlice } from "@reduxjs/toolkit";

const initialmailstate = {mailitems:[],}
export const mailSlice  = createSlice({
    name:'dataget',
    initialState:initialmailstate,
    reducers:{
        fetchAllexpenses(state,action){
         state.mailitems = action.payload;
  
           
        },
        addmail(state,action){
            state.mailitems= [...state.mailitems,action.payload]
   

        },
         
    }
})

export const mailActions =  mailSlice.actions;
