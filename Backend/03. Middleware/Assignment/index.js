/*
    REST APIS WITH MIDDLEWARES
    
    Consider you have a books API where in you have 3 APIs

    GET /books ( has 1 middleware allBooks which prints the console.log ( "Fetching all books") 

    GET /book/:name ( :name is a variable and we will learn this later in the course but this means 
    if you do book/GameOfThrones or book/HarryPotter then all of them will hit this API so we need 
    a middleware singleBook for this api which will fetch the name of the book and for that you need 
    to do req.params.name ( we will learn this too in future ) and you have to add this book name to the 
    request like req.name = req.params.name and then in the route handler you need to return 
    json like {bookName: req.name}.
*/
const express= require("express");
const req = require("express/lib/request");

const app = express();

// app.use(allBooks);

app.get("/books", allBooks,(req, res) => {
    console.log("Boooks route")
    res.send("hello");
})

function allBooks(req, res, next){
    console.log("Fetching all books");
    next();
}

app.get("/books/:name",singleBook , (req, res)=>{
    req.name = req.params.name;
    res.send({bookName:req.name})
})

function singleBook(req, res, next){
    req.name = req.params.name;
    next();
}

app.listen(5000, ()=>{
    console.log("Listening on port 5000");
})