import { Hotel } from "../models/hotelModels.js";
import { Room } from "../models/roomModels.js";
import { getDatesInRange } from "../utils/getDateInRange.utils.js";

// 1. Create New Hotel
const createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json(hotel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 2. Get All Hotels
const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    return res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 3. Get Hotel By ID
const getHotelById = async (req, res) => {
  try {
    const id = req.params.id;
    const hotel = await Hotel.findById(id).populate('rooms'); 

    if (!hotel) {
      return res.status(404).json({ message: "Hotel not Found" });
    }
    return res.status(200).json(hotel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 4. Update Hotel
const updateHotel = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedHotel = await Hotel.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!updatedHotel) {
      return res.status(400).json({ message: "Hotel not found" });
    }
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 5. Delete Hotel
const deleteHotel = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedHotel = await Hotel.findByIdAndDelete(id);
    
    if (!deletedHotel) {
      return res.status(400).json({ message: "Hotel not found" });
    }
    res.status(200).json({ message: "Hotel deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 6. Filter Hotels by City, Price, and Date Availability
const getHotelByFilter = async (req, res) => {
  try {
    const { city, minPrice, maxPrice, startDate, endDate } = req.query;
    const query = {};


    // 1. City Filter (Case-insensitive search)
    if (city) {
      query.city = { $regex: city.trim(), $options: "i" };
    }

// 2. Price Range Filter
    const parsedMin = minPrice ? Number(minPrice) : null;
    const parsedMax = maxPrice ? Number(maxPrice) : null;

    // Filter tabhi lagayein jab valid price values bheji gayi hon
    if ((parsedMin !== null && !isNaN(parsedMin)) || (parsedMax !== null && !isNaN(parsedMax))) {
      query.cheapestPrice = {};
      
      if (parsedMin !== null && !isNaN(parsedMin)) {
        query.cheapestPrice.$gte = parsedMin;
      }
      
      // Zero maxPrice filter ko ignore karein jab tak valid positive price na ho
      if (parsedMax !== null && !isNaN(parsedMax) && parsedMax > 0) {
        query.cheapestPrice.$lte = parsedMax;
      }
    }
    // 3. Date Availability Filter
    if (startDate && endDate) {
      const timestamps = getDatesInRange(startDate, endDate);
      
      // Timestamps ko JS Date objects me convert kar rahe hain (MongoDB schema compatibility ke liye)
      const allDates = timestamps.map((ts) => {
        const date =new Date(ts)
        date.setUTCHours(0, 0, 0, 0);
        return date;
      });

      // Room Find: Un rooms ko dhoondho jinme KAM SE KAM EK roomNumber aisa ho 
      // jiske unavailableDates me requested dates maujood NA hon ($nin)
      const availableRooms = await Room.find({
        roomNumbers: {
          $elemMatch: {
            unavailableDates: { $nin: allDates },
          },
        },
      }).select("_id");
 

      // Available Rooms ki IDs array
      const availableRoomIds = availableRooms.map((room) => room._id);

      // Hotel Query: Unhi hotels ko return karenge jinke 'rooms' array me available room IDs hain
      query.rooms = { $in: availableRoomIds };
    }

    const hotels = await Hotel.find(query).populate("rooms"); // 👈 populate add karein
    return res.status(200).json(hotels);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export {
  createHotel,
  getAllHotels,
  getHotelById,
  updateHotel,
  deleteHotel,
  getHotelByFilter,
};