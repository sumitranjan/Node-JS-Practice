const mongoose = require("mongoose");


//USER SCHEMA
//Step1: create the schema

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamp: true,
  }
);

//step 2: create the model
const User = mongoose.model("user", userSchema); // user => users


module.exports = User