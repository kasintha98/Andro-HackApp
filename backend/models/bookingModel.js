const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

    buyer_id:{type: Schema.Types.ObjectId, ref:"Buyer"},
    space_id:{type: Schema.Types.ObjectId, ref:"Buyer"},
    date:{type:String}

});

module.exports = Booking = mongoose.model("Booking", bookingSchema);