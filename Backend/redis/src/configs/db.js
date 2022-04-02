const mongoose = require('mongoose');

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://sumit:sumit1234@cluster0.wdhhx.mongodb.net/myDBAtlas")
}