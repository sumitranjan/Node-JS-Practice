const mongoos = require("mongoose");

const connect = () =>{
    return mongoos.connect(

    )
}

module.exports = connect;