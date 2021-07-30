const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  buyer_id: { type: Schema.Types.ObjectId, ref: "User" },
  space_id: { type: Schema.Types.ObjectId, ref: "Space" },
  date: { type: String },
});

module.exports = Booking = mongoose.model("Booking", bookingSchema);
