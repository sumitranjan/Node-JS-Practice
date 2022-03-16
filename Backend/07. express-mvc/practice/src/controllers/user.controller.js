const express = require("express");

const app = express();

const User = require("../models/user.models") 

//USERS CRUD
app.get("/users", async (req, res) => {
    try {
      const users = await User.find().lean().exec();
      return res.status(200).send({ users: users }); //[]
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });
  

  
  // body => req.body
  // url => req.params
  // query string => req.query
  
  app.get("/users/:id", async (req, res) => {
    try {
      // console.log(req.params)
      const user = await User.findById(req.params.id).lean().exec();
      // db.users.update({_id: Object('6231a06cc4ca0386282c5349')}, {$set: {req.body}})
  
      return res.status(200).send({ user: user });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });
  
  app.patch("/users/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      // db.users.update({_id: Object('6231a06cc4ca0386282c5349')}, {$set: {req.body}})
  
      return res.status(200).send(user);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });
  
  app.delete("/users/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
  
      return res.status(200).send(user);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });

  module.exports = app;