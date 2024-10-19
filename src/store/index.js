import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/index"; // Import the reducer

const store = configureStore({
    reducer:authSlice
});

export default store;
