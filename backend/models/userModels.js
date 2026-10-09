import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        validate: {
      validator: function (v) {
        return /^[a-zA-Z\s]+$/.test(v);
      },
      message: "ENTER A VALID NAME "
    }
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        match: [
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                "Please enter a valid email address"
        ]
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        
    },
    role:{
        type:String,
        enum:['customer','admin'],
        default:'customer'
    }
},{timestamps:true})

const User=mongoose.model('User',userSchema);

export  default User;