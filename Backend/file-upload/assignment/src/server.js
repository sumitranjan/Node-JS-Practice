const app = require("./index")

const connect = require("./configs/db")

app.listen(5000, async()=>{
    try{
        await connect()
    }
    catch(err){
        console.log({message: err.message})
    }
    console.log("Listening to port 5000")
})