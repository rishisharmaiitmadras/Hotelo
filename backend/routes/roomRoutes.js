import express from "express"
import { protect } from "../middlewares/auth.middlewares.js";
import { admin } from "../middlewares/admin.middlewares.js";
import { createRoom, deleteRoom, getAllRoom } from "../controllers/roomController.js";
import { updateRoomAvailability } from "../controllers/availableController.js";

const router=express.Router();

router.get('/',getAllRoom)
router.post('/:hotelid',protect,admin,createRoom)
router.delete('/:id/:hotelid',protect,admin,deleteRoom) 
router.put('/availability/:id',updateRoomAvailability)

export default router;