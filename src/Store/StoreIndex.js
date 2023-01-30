import { createSlice,configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./Auth-Slice";
import { composeSlice } from "./Compose-Slice";
import { mailSlice } from "./Dataget-Slice";

const store = configureStore({
    reducer:{
    auth:authSlice.reducer,
    compose:composeSlice.reducer,
   mail:mailSlice.reducer,
    }
})
export default store;