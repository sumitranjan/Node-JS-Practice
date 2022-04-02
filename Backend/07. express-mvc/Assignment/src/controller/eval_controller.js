const express = require('express')
const Eval = require("../models/eval_model")

const app = express()

//Eval CRUDS

app.get(" ",async(req,res)=>{
    try {
        const evals = await Eval.find().lean().exec()
 
        res.status(200).send(evals)
    } 
    catch (err)
     {
         return res.status(500).send({message:err.message});
    }
 })
 
 app.post(" ",async(req,res)=>{
     try {
         const evals = await Eval.create(req.body)
     } 
     catch (err)
      {
          return res.status(500).send({message:err.message});
     }
  })

  module.exports = app;