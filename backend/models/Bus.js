import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
    trim: true,
  },
  to: {
    type: String,
    required: true,
    trim: true,
  },
  journeyDate: {
    type: String,
    required: true,
  },
  arrivalTime: {
    type: String,
    required: true,
  },
  totalJourneyTime: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Sleeper", "AC Seater", "Non AC Seater"],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  totalSeats: {
    type: Number,
    required: true,
  },
  bookedSeats: {
    type: [String],
    default: [],
  },
}, {
  timestamps: true,
});

const Bus = mongoose.model("Bus", busSchema);
export default Bus;

