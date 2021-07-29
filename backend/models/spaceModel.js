const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const spaceSchema = new mongoose.Schema({

<<<<<<< HEAD
    seller_id:{type: Schema.Types.ObjectId , ref:"User"},

=======
    // seller_id:{type: Schema.Types.ObjectId, ref:"User"},
>>>>>>> ff7906984ccc8c36cbaa5acfd926aa2d78e142b3
    type: { type: String, required: true, unique: true },
    capacity: { type: String},
    price: { type: String },
    facilities: { type: String }

});

module.exports = Space = mongoose.model("Space", spaceSchema);