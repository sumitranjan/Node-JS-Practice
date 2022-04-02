const express = require('express');

const Gallery = require("../models/gallery.model")

const upload = require("../middlewares/uploads")

const router = express.Router();

router.get("",async (req,res)=>{
    try{
        const gallerys = await Gallery.find().lean().exec()

        res.status(200).send(gallerys)
    }
    catch(err){
        res.status(500).send({message: err.message});
    }
})

router.post("/multiple",upload.any("user_pictures"),async(req,res)=>{
    try{
        const filepaths = req.files.map((file)=>{
            return file.path
        })
        const gallery = await Gallery.create({
            user_pictures:filepaths,
            userId: req.body.userId
        })
        return res.status(200).send(gallery)
    }
    catch(err){
        res.status(400).send({message: err.message});
    }
})

module.exports = router