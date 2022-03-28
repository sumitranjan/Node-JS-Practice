const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        title:{type:String, requiredL:true},
        userId : {type:mongoose.Schema.Types.ObjectId, ref:"user", required:tue}
    },
    {
        versionKey:false,
        timestamps:true
    },
)

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
