const express = require('express');
const connect = require("./config/db")

const userController = require('./controller/user_controller')
const studentController = require('./controller/student_controller')
const batchController = require('./controller/batch_controller')
const evalController = require('./controller/eval_controller')
const submissionController = require('./controller/submission_controller')

const app = express();
app.use(express.json());

app.use("/users", userController)
app.use("/students", studentController)
app.use("/batchs", batchController)
app.use("/evals", evalController)
app.use("/submissions", submissionController)
  

app.listen(5000, async()=>{
    try{
        await connect();
    }
    catch(err){
        console.log(err)
    }
    console.log("Listening to port 5000")
})