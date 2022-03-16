
const mongoose = require("mongoose");

//POST SCHEMA
//Step: create the schema
const postSchema = new mongoose.Schema(
    {
      title: { type: String, required: true },
      body: { type: String, required: true },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
    },
    {
      versionKey: false,
      timestamp: true, //createdAt, updatedAt
    }
  );
  
  //step: create the model
  module.exports = mongoose.model("post", postSchema);
  