const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        likes:{type:Number,default:0},
        coverImage:{type:String,required:true},
        content:{type:String,required:true},

    },
    {
        versionKey:false,
        timestamps:true,
    }
)
const Book = mongoose.model('book',bookSchema)

module.exports = Book