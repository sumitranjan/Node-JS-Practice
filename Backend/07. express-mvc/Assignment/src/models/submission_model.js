
const mongoose = require('mongoose');

// Submission Schema 
//Step 1 :- Creating Submission Schema 

const submissionSchema = new mongoose.Schema(
    {
        marks:{type:Number,required:true},
        evalId:{type:mongoose.Schema.Types.ObjectId,ref:"eval",required:true},
        studentId:{type:mongoose.Schema.Types.ObjectId,ref:"student",required:true},
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

//step 2 : creating Model
const Submission = mongoose.model("Submission",submissionSchema)

module.exports = Submission
