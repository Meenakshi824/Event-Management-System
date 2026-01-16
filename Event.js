import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: String,
  date: String,
  location: String,
  description: String
});

export default mongoose.model("Event", EventSchema);
