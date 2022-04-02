const express = require('express')
const Student = require("../models/student_model")

const app = express()

// Student Crud

app.get(" ",async(req,res)=>{
    try {
        const students = await Student.find().lean().exec()
 
        res.status(200).send(students)
    } 
    catch (err)
     {
         return res.status(500).send({message:err.message});
    }
 })
 
 app.post(" ",async(req,res)=>{
     try {
         const students = await Student.create(req.body)
     } 
     catch (err)
      {
          return res.status(500).send({message:err.message});
     }
  })

  module.exports =app;