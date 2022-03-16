const express = require("express");

const app = express();

const Comment = require("../models/comment.models"); 
const crudControllers = require("./crud.controllers");
//Comment CURD

app.get("/comments", async (req, res) => {
    try {
      const comments = await Comment.find()
        .populate({
          path: "postId",
          select: ["title"],
          populate: { path: "userId", select: ["FirstName"] },
        })
        .populate({ path: "userId", select: ["FirstName"] })
        .lean()
        .exec();
  
      return res.status(200).send(comments);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });

  app.post("",crudControllers(Comment).post);
  
//   app.post("/comments", async (req, res) => {
//     try {
//       const comment = await Comment.create(req.body);
  
//       return res.status(200).send(comment);
//     } catch (error) {
//       return res.status(500).send({ message: error.message });
//     }
//   });
  
  app.get("/comments/:id", async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id)
        .populate({
          path: "postId",
          select: ["title", "body"],
          populate: { path: "userId", select: ["password"] },
        })
        .populate({ path: "userId", select: ["firstName"] })
        .lean()
        .exec();
  
      return res.status(200).send(comment);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });
  
  app.patch("/comments/:id", async (req, res) => {
    try {
      const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .populate({
          path: "postId",
          select: ["title"],
          populate: { path: "userId", select: ["firstName"] },
        })
        .populate({
          path: "userId",
          select: ["email"],
        })
        .lean()
        .exec();
  
      return res.status(200).send(comment);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });
  app.delete("/comments/:id", async (req, res) => {
    try {
      const comment = await Comment.findByIdAndDelete(req.params.id)
        .lean()
        .exec();
  
      return res.status(200).send(comment);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });

  module.exports = app;