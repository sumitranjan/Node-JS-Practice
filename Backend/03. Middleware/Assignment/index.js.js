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

const express = require("express");

const app = express();

app.use(allBooks);

app.get("/books",allBooks,(req,res) =>{
    
    return res.send("")
})

function allBooks(req,res,next){
    console.log("Fetching all books");
  next();
}
app.listen(5000, () => {
    console.log("listening on port");
}) 