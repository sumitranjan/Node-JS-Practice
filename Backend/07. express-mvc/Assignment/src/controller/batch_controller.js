const express = require('express')
const Batch = require("../models/batch_model")

const app = express()

//Batch CRUDS
app.get(" ",async(req,res)=>{
    try {
        const batchs = await Batch.find().lean().exec()
 
        res.status(200).send(batchs)
    } 
    catch (err)
     {
         return res.status(500).send({message:err.message});
    }
 })
 
 app.post(" ",async(req,res)=>{
     try {
         const students = await Batch.create(req.body)
     } 
     catch (err)
      {
          return res.status(500).send({message:err.message});
     }
  })

  module.exports = app;