const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
      //Wrte mongoDB connection string
      //""
    );
  };


  module.export = connect