import { createSlice } from "@reduxjs/toolkit";

const initialmailstate = {mailitems:[],
detailsitem:[]}
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
        mailDetails(state,action){
            state.detailsitem = action.payload
        },
        removeMail(state,action){
            const id = action.payload;
            const temp = [...state.mailitems];
             temp.forEach((item,index)=>{
                if(id===item.id){
                    temp.splice(index,1);
                }
             });
             state.mailitems = temp;
        }
         
    }
})

export const mailActions =  mailSlice.actions;
