import express from "express";
import { getDatesInRange } from "./../utils/getDateInRange.utils.js";
import { Room } from "../models/roomModels.js";
import { Booking } from "./../models/bookingModels.js";

const createBooking = async (req, res) => {
  try {
    const { hotelId, roomId, roomNumber, startDate, endDate } = req.body;
    const userId = req.user.id;

    // 1. Basic Payload Validation
    if (!hotelId || !roomId || !roomNumber || !startDate || !endDate) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // 2. Generate Date Timestamps
    const allDates = getDatesInRange(startDate, endDate);

    if (!allDates || allDates.length === 0) {
      return res.status(400).json({ message: "Invalid date range selected." });
    }

    // 3. Find Room
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: "Room not found." });
    }

    // 4. Target Specific Room Number
    const targetRoomNumber = room.roomNumbers.find(
      (r) => r.number === Number(roomNumber)
    );

    if (!targetRoomNumber) {
      return res.status(400).json({ message: "Invalid room number." });
    }

    // 5. Check Date Overlap / Availability
    const isBooked = targetRoomNumber.unavailableDates.some((date) =>
      allDates.some((d) => new Date(d).getTime() === new Date(date).getTime())
    );

    if (isBooked) {
      return res.status(400).json({
        message: "Room is already booked for the selected dates.",
      });
    }

    // 6. Calculate Price
    const price = room.price; // Fixed: Removed redundant 'await'
    const totalPrice = allDates.length * price;

    // Convert Timestamps to standard JS Date Objects
    const formattedDates = allDates.map((d) => new Date(d));

    // 7. Create Booking Document
    const newBooking = await Booking.create({
      user: userId,
      hotel: hotelId,
      room: roomId,
      roomNumber: Number(roomNumber),
      dates: formattedDates,
      totalPrice,
    });

    // 8. Update Room's Unavailable Dates & Save
    targetRoomNumber.unavailableDates.push(...formattedDates);
    await room.save();

    return res.status(201).json({
      success: true,
      message: "Booking confirmed successfully!",
      booking: newBooking,
    });
  } catch (error) {
    console.error("Error in createBooking:", error);
    return res.status(500).json({ message: error.message });
  }
};

const getUserBooking = async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch user bookings sorted by latest first
    const bookings = await Booking.find({ user: userId })
      .populate("hotel", "name city address photos")
      .populate("room", "title price")
      .sort({ createdAt: -1 });

    return res.status(200).json(bookings);
  } catch (error) {
    console.error("Error in getUserBooking:", error);
    return res.status(500).json({ message: error.message });
  }
};

export { createBooking, getUserBooking };