const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const spaceSchema = new mongoose.Schema({

    seller_id:{type: Schema.Types.ObjectId, ref:"User"},

    type: { type: String, required: true, unique: true },
    capacity: { type: String, required: true, minlength: 5 },
    price: { type: String },
    facilities: { type: String }

});

module.exports = Space = mongoose.model("Space", spaceSchema);