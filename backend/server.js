
import dotenv from 'dotenv';
dotenv.config()
import connectDB from "./config/db.js";
import express from 'express';

import cors from "cors"
 

const app=express();

// connecting a database 

connectDB();
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,               
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); // Body parser middleware


app.get("/",(req,res)=>{
    res.send("API is running successfully");
}) 

//routes 
import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth",authRoutes)

import hotelRoutes from "./routes/hotelRoutes.js";
app.use("/api/hotels",hotelRoutes)

import roomRoutes from "./routes/roomRoutes.js"
app.use("/api/rooms",roomRoutes)
const PORT =process.env.PORT;
import bookingRoutes from "./routes/bookingRoutes.js"
app.use("/api/bookings",bookingRoutes)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
