const path = require('path');

const multer = require('multer');

const req = require("express/lib/request");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../my-uploads"));
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now() 
      cb(null,  uniquePrefix+ '-' +file.originalname )
    },
  })
  
  function fileFilter (req, file, cb) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
    if(file.mimetype==="image/jpeg" || file.mimetype==="image/png"){
         // To accept the file pass `true`, like so:
        cb(null, true)  
    }
    else{
    // To reject this file pass `false`, like so:
    cb(null, false)
    }
   
  
    // You can always pass an error if something goes wrong:
    // cb(new Error('I don\'t have a clue!'))
  
  };

  const options = {
      storage,
      fileFilter,
      limits:{
          fileSize: 1024*1024*5,
      }
  }
 
  const uploads = multer(options);

  module.exports = uploads