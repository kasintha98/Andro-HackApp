const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role:{type:String},
  companyname:{type:String},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  description: { type: String },
  location: { type: String },
  distict: { type:String },
  contactNo: { type: String },

});

module.exports = User = mongoose.model("User", userSchema);