import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import eventRoutes from "./eventRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://Meenakshi:Meena@cluster0.klfjrby.mongodb.net/EventDB?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));


// API Routes
// API Routes
app.use("/api/events", eventRoutes);

const PORT = 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on port ${PORT}`);
});



