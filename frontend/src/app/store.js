import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/authSlice.js'
import bookingReducer from '../features/bookingSlice.js';
export const store=configureStore({
    reducer:{
        auth:authReducer,
        bookings: bookingReducer,
    }
})