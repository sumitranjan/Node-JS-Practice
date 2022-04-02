const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

const connect = ()=>{
    return mongoose.connect("mongodb://localhost:27017/bookData")
}

// USER SCHEMA 
// Step 1 :- creating the schema

const userSchema = new mongoose.Schema(
    {
        firstName:{type:String, required:true},
        lastName :{type:String, required:true},
    },
    {
        versionKey: false,
        timestamps:true,
    },
)

// Step 2 : - Creating Model
const User = mongoose.model("user",userSchema);

// Section schema
// Step 1 :- creating the schema
const sectionSchema = new mongoose.Schema(
    {
        sectionName:{type:String, required:true}
    },
    {
        versionKey: false,
        timestamps:true,
    }, 
)

// Step 2 :- Creating Model
const Section = mongoose.model("section",sectionSchema);

// Books schema
// Step 1 : - Creating the schema
const bookSchema = new mongoose.Schema(
    {
        name:{type:String, required:true},
        body:{type:String, required:true},
        sectionId:{type:mongoose.Schema.Types.ObjectId,ref:"section",required:true},
    },
    {
        versionKey: false,
        timestamps:true,
    }, 
) 

// step 2 :- creating Model
const Book = mongoose.model("book",bookSchema)

//Author Schema

//step 1 :- creating the Schema
const authorSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"user"}},
    {
        versionKey: false,
        timestamps:true,
    }, 
)

//step 2 :- creating the model

const Author = mongoose.model("author",authorSchema)

//Book Author schema
const bookAuthorSchema = new mongoose.Schema(
    {
        bookId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"book"},
        authorId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"author"}
    },
    {
        versionKey: false,
        timestamps:true,
    }, 
    ) 

    // step 2 :- Creating the Model
const BookAuhtor = mongoose.model("bookAuthor",bookAuthorSchema)

// CheckOut schema
// Step 1 :- Creating the Schema
const checkOutSchema = new mongoose.Schema(
    {
        userId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"user"},
        bookId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"book"},
        checkOutTime:{type:Date,required:true},
        checkInTime:{type:Date,required:true}
    },
    {
        versionKey: false,
        timestamps:true,
    }, 
)

// Step 2 :- Creating Model 
const CheckOut = mongoose.model("checkOut",checkOutSchema)

// CRUD Oerations


// user CRUD
app.get("/users",async (req,res)=>{
    try{
        const users = await User.find().lean().exec()

        return res.status(200).send({users})
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
})

app.post("/users",async (req, res) => {
    try{
        const users =await User.create(req.body)
        return res.status(201).send({users})
    }
    catch(err){
        return res.status(500).send({ message: err.message });
    }
})

app.get("/users/:id",async (req,res)=>{
    try{
        const users = await User.findById(req.params.id).lean().exec()

        return res.status(200).send({users})
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
})

//Section CRUD

app.get("/sections",async (req,res)=>{
    try{
        const sections = await Section.find().lean().exec()

        return res.status(200).send(sections)
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
})

app.post("/sections",async (req, res) => {
    try{
        const sections =await Section.create(req.body)
        return res.status(201).send(sections)
    }
    catch(err){
        return res.status(500).send({ message: err.message });
    }
})

app.get("/sections/:id",async (req,res)=>{
    try{
        const sections = await Section.findById(req.params.id).lean().exec()

        return res.status(200).send(sections)
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
})

//Author CRUD
app.get("/authors",async (req,res)=>{
    try{
        const authors = await Author.find().populate({path:"bookId",select:"name"}).lean().exec()

        return res.status(200).send(authors)
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
})

app.post("/authors",async (req, res) => {
    try{
        const authors =await Author.create(req.body)
        return res.status(201).send(authors)
    }
    catch(err){
        return res.status(500).send({ message: err.message });
    }
})

app.get("/authors/:id",async (req,res)=>{
    try{
        const authors = await Author.findById(req.params.id).lean().exec()

        return res.status(200).send(authors)
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
})

// Book Crud 

app.get("/books",async (req,res)=>{
    try{
        const books = await Book.find().populate({path:"sectionId"}).lean().exec()

        return res.status(200).send(books)
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
})

app.post("/books",async (req, res) => {
    try{
        const books =await Book.create(req.body)
        return res.status(201).send(books)
    }
    catch(err){
        return res.status(500).send({ message: err.message });
    }
})

app.get("/books/:id",async (req,res)=>{
    try{
        const books = await Book.findById({sectionId:req.params.id}).lean().exec()

        return res.status(200).send(books)
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
})


app.listen(5000, async() =>{

    try{
        await connect();
    }
    catch(err){
        console.log(err)
    }

    console.log("listening on port 5000")
})