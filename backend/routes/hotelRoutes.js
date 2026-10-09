import express from "express"

import { admin } from "../middlewares/admin.middlewares.js"
import { createHotel,  deleteHotel,  getAllHotels, getHotelByFilter, getHotelById, updateHotel} from "../controllers/hotelController.js"
import { protect } from "../middlewares/auth.middlewares.js"
import { aiSearchHotels } from "../controllers/aiController.js"

const router=express.Router()

router.post('/',protect,admin,createHotel)
router.get('/',getAllHotels)
router.get('/get',getHotelByFilter  )
router.get('/:id',getHotelById)
router.put('/:id',protect,admin,updateHotel)
router.delete('/:id',protect,admin,deleteHotel)

router.post('/ai-search', aiSearchHotels);
export default router;