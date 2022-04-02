
const mongoose = require('mongoose');

// Batch Schema 
//step 1 : - Creating Batch Schema

const batchSchema = new mongoose.Schema(
    {
    batchName:{type:String,required:true},
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

//Creating the model

const Batch = mongoose.model("batch",batchSchema)

module.exports = Batch

