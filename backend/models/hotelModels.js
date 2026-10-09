import mongoose from "mongoose";
import { Room } from "./roomModels.js";


const hotelSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    cheapestPrice:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        default:0,
        min:0,
        max:5
    },
    photos:{
        type:[String]
    },
    description:{
        type:String,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    },
    // kis admin ne yeh hotel banaya hai/
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    rooms:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:Room
        }
    ]
},{timestamps:true})

export const Hotel =mongoose.model('Hotel',hotelSchema)