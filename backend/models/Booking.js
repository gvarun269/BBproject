import mongoose from "mongoose";

const passengerSchema = new mongoose.Schema({
  seatNumber: String,
  name: String,
  age: Number,
  gender: String,
  phone: String
});

const bookingSchema = new mongoose.Schema({

    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  busId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bus",
    required: true
  },
  PNR: {
    type: String,
    unique: true,
    required: true
  },
  passengers: [passengerSchema],
  selectedSeats: [String],
  from: String,
  to: String,
  journeyDate: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
