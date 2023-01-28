import { configureStore } from "@reduxjs/toolkit";
import mailReducer from '../Store/MailSlice'
export const store = configureStore({
    reducer:{
        mail:mailReducer,
    }
})