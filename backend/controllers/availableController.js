import { Room } from "../models/roomModels.js";

import { getDatesInRange } from "../utils/getDateInRange.utils.js";

export const updateRoomAvailability=async (req,res)=>{

    try {
        const id=req.params.id; 
        const { startDate, endDate } = req.body;
         const allDates = getDatesInRange(startDate, endDate);
    
        await Room.updateOne({"roomNumbers._id": req.params.id},{$push:{"roomNumbers.$.unavailableDates":{$each:allDates}}})

       
        return res.status(200).json({message:"Room availability updated successfully!"})
    
    } catch (error) {
        return res.status(500).json({message:error.message})        
    }
}