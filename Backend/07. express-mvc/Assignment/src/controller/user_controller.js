const express = require('express')
const User = require("../models/user_model")

const app = express()

// USER CRUDS 
app.get("/",async(req,res)=>{
    try {
        const users = await User.find().lean().exec()
 
        res.status(200).send(users)
    } 
    catch (err)
     {
         return res.status(500).send({message:err.message});
    }
 })
 
 app.post("/",async(req,res)=>{
     try {
         const users = await User.create(req.body)
     } 
     catch (err)
      {
          return res.status(500).send({message:err.message});
     }
  })

  module.exports = app;