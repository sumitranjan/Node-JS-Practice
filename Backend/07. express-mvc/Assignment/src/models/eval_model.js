
const mongoose = require('mongoose');

// Evaluation Schema
// Step 1 :- Creating Evaluation Schema

const evalSchema = new mongoose.Schema(
    {
        evalDate:{type:Date,required:true},
        userId:{type:mongoose.Schema.Types.ObjectId, ref:"user",required:true},
        batchId:{type:mongoose.Schema.Types.ObjectId,ref:"batch",required:true},
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

const Eval = mongoose.model("eval",evalSchema)

module.exports = Eval

