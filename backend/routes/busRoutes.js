import express from "express";
import { addBus, getAvailableBuses } from "../controllers/busController.js";

const router = express.Router();

router.post("/add", addBus); // Only admin? If so, protect this too
router.get("/search", getAvailableBuses); // ✅ Now protected

export default router;

