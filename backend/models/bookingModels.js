import mongoose from 'mongoose';



const bookingSchema=mongoose.Schema(
{
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        
    },
    hotel:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hotel",
        required:true
    },
    room:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Room",
        required:true
    },
    roomNumber:{
        type:Number,
        required:true
    },
    dates:[{
        type:Number,
        required:true
    }],
    totalPrice:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:["booked","cancelled"],
        default :"booked"
    }



},{timestamps:true})

export const Booking =mongoose.model("Booking",bookingSchema)
