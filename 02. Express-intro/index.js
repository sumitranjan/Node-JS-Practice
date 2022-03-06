const express = require("express");

//app is a standard convention
const app = express();
// console.log(app);


// REST APIs => Representational State Transfer

/*
    get  : getting data from server
    post : add some data to server
    put/patch : update some data on the server
    delete : remove some data from server 
*/

//express connecting with the operating system
//linux command: sudo lsof -i tcp:5000  : this command might not run on windows
//command will show express running on os in cmd

//get
//get take 2 arguments : route and callback function

//browser rquest /users
app.get("/users", function (req, res){
    console.log("Hello Users");

    //server responded with this response
    res.send({ name : "Sumit Ranjan" });
    res.send("Hello Users response");
})


app.get("/students", function (req, res){
    
    console.log("method", req.method)// tells express what is the method
    res.send({student : "Abc"});
})

//Express always look for methods & route 
//Methods: get
//Route: users, students

//*******Important ******
//Task of express only is to match the method plus route and send the response

app.listen(5000, () => {
    console.log("listening on port");
});

