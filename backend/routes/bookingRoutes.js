import express from "express"
import { createBooking, getUserBooking } from '../controllers/bookingController.js';
import { protect } from './../middlewares/auth.middlewares.js';


const router=express.Router()

router.post('/',protect,createBooking)
router.get('/my-bookings',protect,getUserBooking)
export default router;