import jwt from "jsonwebtoken";
import User from "../models/User.js"; 
import dotenv from "dotenv";
dotenv.config();

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization token missing" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // { userId: ..., email: ... } based on what you signed in token
    next();
  } catch (error) {
    console.error("JWT Auth Error:", error);
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

export default authMiddleware;
