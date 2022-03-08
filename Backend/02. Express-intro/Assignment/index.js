/*
    NODE EVENT LOOP AND HTTP
    Create an express server and write 2 apis

    get method with route "" ( also called as home or root route) and return a string called hello

    get method with route "/books" and return json of 4 books with any content
*/

const express = require("express");

const app = express();

app.get("/", function (req, res){
    res.send("Hello")
})


app.get("/books", function (req, res){
    res.send(
        [
            {name:"Javascript Book", author:"Sumit"},
            {name:"HTML Book", author:"Amit"},
            {name:"CSS Book", author:"Rohit"},
            {name:"Node Book", author:"Sunny"}
        ]
    )
})


app.listen(5000, () =>{
    console.log("Listening on port");
})