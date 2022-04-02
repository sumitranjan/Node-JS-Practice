const app = require('./index')

const connect = require('./config/db')

app.listen(5000, async ()=>{
    try{
        await connect();
        
    }
    catch(err){
        console.log(err.message)
    }
    console.log("Listening on port 5000")
})