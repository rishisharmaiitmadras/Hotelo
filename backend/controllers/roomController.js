import express from "express"
import { Room } from "../models/roomModels.js"
import { Hotel } from './../models/hotelModels.js';

const createRoom=async (req,res)=>{
    const hotelId=req.params.hotelid
    const newRoom=new Room(req.body)
    
    try {
        const savedRoom=await newRoom.save();
        
        try {
            const updatedHotel = await Hotel.findByIdAndUpdate(
      hotelId,
      { $push: { rooms: savedRoom._id } }, // Check Karo: Hotel Model mein 'rooms' hai ya 'room'
      { returnDocument: "after"}
    );

    

    
        } catch (error) {
            return res.status(500).json({message:"Room not Attached to hotel" ,error:error.message})
        }
        return res.status(200).json({message:"Room added successfully", rooms:savedRoom})
    
        
        
    } catch (error) {
        res.status(500).json({messsage:error.message})
    }
}

const deleteRoom=async (req,res)=>{
    const hotelId=req.params.hotelid;
    const roomId=req.params.id;

    try {
        const deletedRoom=await Room.findByIdAndDelete(roomId);
        if (!deletedRoom) {
                return res.status(404).json({ message: "Room nahi mila ya pehle hi delete ho chuka hai!" });
    }
        try {
            await Hotel.findByIdAndUpdate(hotelId,{
                $pull:{rooms:roomId}
            })

        } catch (error) {
            return res.status(400).json({message:"Room reference not deleted by Hotel",error:error.message})
        }
        res.status(200).json({message:"Room deleted"})
        
    } catch (error) {
        return res.status(500).json({message:"Room not found"})
        
    }

    

}

const getAllRoom=async (req,res)=>{

    try {
        const rooms=await Room.find();
        return res.status(200).json(rooms)

    } catch (error) {
        return res.status(500).json({message:error.message})
    }

}
export {createRoom,deleteRoom,getAllRoom}