import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: { user: "", isLoggedIn:false },
    reducers: {
        // Define your reducer functions here, for example:
        login:(state) =>{
            
            state.isLoggedIn = true;
        },
        logout:(state)=> {
            state.isLoggedIn = false;
        }
    },
});

export const {login,logout} = authSlice.actions;

export default authSlice.reducer;