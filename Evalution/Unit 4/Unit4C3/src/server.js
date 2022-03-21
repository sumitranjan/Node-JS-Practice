const connect = require('./configs/db');

const app = require("./index");

app.listen(5000,async(req,res) =>{
    try {
        await connect;
    } catch (error) {
        res.status(500).send({message: error.message});
    }

    console.log("Listening to posrt 5000")
})