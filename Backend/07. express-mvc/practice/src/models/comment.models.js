const mongoose = require("mongoose");

// COMMENT Schema
// Step 1 :- create the schema
const commentSchema = new mongoose.Schema(
    {
      body: { type: String, required: true },
      postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true,
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  // Step 2 :- create the model
  module.exports = mongoose.model("comment", commentSchema); // comment => comments
  