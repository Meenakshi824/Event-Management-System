import Event from "./Event.js";

export const getEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

export const addEvent = async (req, res) => {
  const newEvent = new Event(req.body);
  await newEvent.save();
  res.json({ message: "Event added successfully" });
};
