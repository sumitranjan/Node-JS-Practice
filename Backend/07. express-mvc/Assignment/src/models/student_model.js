
const mongoose = require('mongoose');

// Student Schema
// Step 1 :- Creating Student Schema 

const studentSchema = new mongoose.Schema(
    {
        rollId:{type:String,required:true},
        batchId:{type:mongoose.Schema.Types.ObjectId,ref:"batch",required:true},
        userId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"user"}
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

// Step 2 :- Creating the model 

const Student = mongoose.model("student",studentSchema)

module.exports = Student

