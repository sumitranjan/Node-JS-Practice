const mongoose = require('mongoose');

module.exports  = () =>{
    return mongoose.connect(
    //   "mongodb+srv://sumit:sumit1234@cluster0.9hiee.mongodb.net/mydbs?retryWrites=true&w=majority"
    "mongodb+srv://sumit:sumit1234@cluster0.9hiee.mongodb.net/myDB"
    //    "mongodb+srv://dhaval:dhaval_123@cluster0.ljuvz.mongodb.net/web15-atlas?retryWrites=true&w=majority"

       );
};

//module.exports = connect;

