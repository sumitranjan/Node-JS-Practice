const mongoose = require('mongoose');

module.exports= ()=>{
        return mongoose.connect("mongodb+srv://sumit:sumit1234@cluster0.wdhhx.mongodb.net/myDBAtlas?authSource=admin&replicaSet=atlas-10rf3t-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true");
}