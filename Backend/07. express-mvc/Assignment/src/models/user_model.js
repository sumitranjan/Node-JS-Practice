
const mongoose = require('mongoose');

// User Schema

//Step 1 : - Creating the Schema
const userSchema = new mongoose.Schema(
    {
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        gender:{type:String,required:true},
        dateOfBirth:{type:String,required:true},
        type:{type:String,required:true}
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

// Step 2 :- Creating the model

const User = mongoose.model("user",userSchema);

module.exports = User