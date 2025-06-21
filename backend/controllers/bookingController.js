import Booking from "../models/Booking.js";
import Bus from "../models/Bus.js";
import { v4 as uuidv4 } from "uuid"; // For generating unique PNR

// ==========================
// 1. Confirm Booking
// ==========================
export const confirmBooking = async (req, res) => {
  try {
    const { busId, selectedSeats, passengers, from, to, date } = req.body;

    // 1. Find the bus
    const bus = await Bus.findById(busId);
    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }

    // 2. Check for already booked seats
    const alreadyBooked = bus.bookedSeats.filter((seat) =>
      selectedSeats.includes(seat)
    );
    if (alreadyBooked.length > 0) {
      return res
        .status(400)
        .json({ message: `Seats already booked: ${alreadyBooked.join(", ")}` });
    }

    // 3. Mark selected seats as booked
    bus.bookedSeats.push(...selectedSeats);
    await bus.save();

    // 4. Generate PNR
    const PNR = uuidv4().split("-")[0].toUpperCase();

    // 5. Create and save booking
    const booking = new Booking({
      userId: req.user.userId,
      busId,
      PNR,
      selectedSeats,
      passengers,
      from,
      to,
      date,
    });

    await booking.save();

    // 6. Return full booking info to frontend
    return res.status(200).json({
      message: "Booking confirmed",
      booking: {
        _id: booking._id,
        PNR,
        selectedSeats,
        passengers,
        from,
        to,
        date,
        busName: bus.name,
      },
    });
  } catch (err) {
    console.error("Booking Error:", err);
    return res
      .status(500)
      .json({ message: "Server error while booking", error: err.message });
  }
};

// ==========================
// 2. Get User Bookings
// ==========================
export const getUserBookings = async (req, res) => {
  try {
    const userId = req.user.userId;

    const bookings = await Booking.find({ userId }).populate("busId");

    res.status(200).json(bookings);
  } catch (err) {
    console.error("Error fetching user bookings:", err);
    res.status(500).json({ message: "Error fetching bookings" });
  }
};



