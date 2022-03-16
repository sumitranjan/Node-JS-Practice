const express = require("express");

const app = express();

const Post = require("../models/post.models") 

// CRUD OPERATIONS

// get => getting data from the server
// post => adding data to the server
// put / patch => updating data in the server
// delete => deleting data from the server



//When yoyu use populate(), something like this happen
// const post = db.posts.findOne({_id: object("djfbhjfdsb")})
// const user = db.users.findOne({_id:  post.userId})
//post.userId = user;

// POSTS CRUD
app.get("/posts", async (req, res) => {
    try {
      // const posts = await Post.find().populate({path:"userId", select:["firstName"]}).lean().exec();
      const posts = await Post.find()
        .populate({
          path: "userId",
          select: { firstName: 1, _id: 0 },
        })
        .lean()
        .exec();
  
      return res.status(200).send(posts);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });
  
  app.post("/posts", async (req, res) => {
    try {
      const post = await Post.create(req.body);
  
      return res.status(200).send(post);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });
  
  app.get("/posts/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).lean().exec();
  
      return res.status(200).send(post);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });
  //Check once
  app.patch("/posts/:id", async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      return res.status(200).send(post);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });
  
  app.delete("/posts/:id", async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(post);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports = app;