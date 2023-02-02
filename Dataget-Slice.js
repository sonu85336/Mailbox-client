import { createSlice } from "@reduxjs/toolkit";

const initialmailstate = {
  mailitems: [],
  detailsitem: [],
  counter:0,
};
export const mailSlice = createSlice({
  name: "dataget",
  initialState: initialmailstate,
  reducers: {
    fetchAllexpenses(state, action) {
      state.mailitems = action.payload;
    },
    addmail(state, action) {
      state.mailitems = [...state.mailitems, action.payload];
    },
    mailDetails(state, action) {
      state.detailsitem = action.payload;
    },
    removeMail(state, action) {
      const id = action.payload;
      const temp = [...state.mailitems];
      temp.forEach((item, index) => {
        if (id === item.id) {
          temp.splice(index, 1);
        }
      });
      state.mailitems = temp;
    },
    readMail(state, action) {
       state.counter =  Number(action.payload)
       
     
   
    },
    unreadMaiil(state, action) {
      if (state.counter > 0) {
        state.counter = state.counter - 1
         
      }
    },
  },
});

export const mailActions = mailSlice.actions;
