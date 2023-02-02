import { createSlice } from "@reduxjs/toolkit";
const initialIdToken = localStorage.getItem('token')
const initialAuthState = {
    token:initialIdToken,
    isLoggedIn:!!initialIdToken,
    
}
export const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
        login(state,action){
            state.token = action.payload;
             state.isLoggedIn = true
        },
        logout(state,action){
            state.token=action.payload
            state.isLoggedIn= false
             localStorage.removeItem('token')
             localStorage.removeItem('email')
        },
    }
})


export const authActions = authSlice.actions;