const express = require('express')
const Submission = require("../models/submission_model")

const app = express()

//Submission CRUDS

app.get(" ",async(req,res)=>{
    try {
        const submissions = await Submission.find().lean().exec()
 
        res.status(200).send(submissions)
    } 
    catch (err)
     {
         return res.status(500).send({message:err.message});
    }
 })
 
 app.post(" ",async(req,res)=>{
     try {
         const submissions = await Submission.create(req.body)
     } 
     catch (err)
      {
          return res.status(500).send({message:err.message});
     }
  })

  app.get("/:id",async(req,res)=>{
    try {
        const submissions = await Submission.find({evalId:req.params.id}).populate({path:"studentId",populate:{path:"userId"}}).sort({marks:-1}).lean().exec()
 
        res.status(200).send(submissions)
    } 
    catch (err)
     {
         return res.status(500).send({message:err.message});
    }
 })

 app.get("/:id",async(req,res)=>{
    try {
        const submissions = await Submission.find({evalId:req.params.id}).lean().exec()
 
        res.status(200).send(submissions)
    } 
    catch (err)
     {
         return res.status(500).send({message:err.message});
    }
 })

 module.exports =app;