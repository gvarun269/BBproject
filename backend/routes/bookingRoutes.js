import express from "express";
import Booking from "../models/Booking.js"; 
import { confirmBooking,getUserBookings } from "../controllers/bookingController.js";
import authMiddleware from "../middleware/authMiddleware.js"; 

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Error fetching bookings", error: err.message });
  }
});

router.post("/book", authMiddleware, confirmBooking);
router.get("/my-tickets", authMiddleware, getUserBookings);

export default router;
