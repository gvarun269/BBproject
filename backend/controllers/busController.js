import Bus from "../models/Bus.js";

// Add Bus Controller
export const addBus = async (req, res) => {
  try {
    const {
      name,
      from,
      to,
      journeyDate,
      arrivalTime,
      totalJourneyTime,
      type, // e.g. Sleeper, AC Seater, etc.
      price,
      totalSeats
    } = req.body;

    const newBus = new Bus({
      name,
      from,
      to,
      journeyDate,
      arrivalTime,
      totalJourneyTime,
      type,
      price,
      totalSeats,
      bookedSeats: []  // Initialize as empty
    });

    await newBus.save();
    res.status(201).json(newBus);
  } catch (error) {
    console.error("Error adding bus:", error);
    res.status(500).json({ message: "Error adding bus", error });
  }
};

// Get Available Buses Controller
export const getAvailableBuses = async (req, res) => {
  try {
    const { from, to, journeyDate } = req.query;
    console.log("Search Query:", { from, to, journeyDate });
    if (!from || !to || !journeyDate) {
      return res.status(400).json({ message: "Missing required query parameters" });
    }
    const buses = await Bus.find({ from, to, journeyDate });
    res.status(200).json(buses);
  } catch (error) {
    console.error("Error fetching buses:", error);
    res.status(500).json({ message: "Error fetching buses" });
  }
};
