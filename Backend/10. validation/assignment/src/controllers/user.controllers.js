const express = require('express');

const { body, validationResult } = require('express-validator');


const User = require('../models/user.models')

const router = express.Router();

router.post('/',
body("firstName").trim().not().isEmpty().withMessage("First Name cannot be empty").isLength({min:4}).withMessage("Minimum 4 Characters are required"),
body("lastName").trim().not().isEmpty().withMessage("Last Name cannot be empty").isLength({min:4}).withMessage("Minimum 4 Characters are required"),
body("email").isEmail().custom(async (value) =>{const user = await User.findOne({email:value});
if(user){
    throw new Error("Email is already present")
}
return true
}),
body("gender").not().isEmpty().withMessage("Gender cannot be empty").custom((val)=>{
    if(val=="Male" || val=="Female" || val=="Other"){ 
        return true
    } 
    throw new Error("Enter Correct Gender")
}),
body("age").not().isEmpty().withMessage("Age cannot be empty").isNumeric().custom((val)=>{
    if(val<1 || val >120){ throw new Error("Age must be between 1 and 100")}
    return true
}),
body("pincode").not().isEmpty().withMessage("Pincode cannot be empty").isNumeric().isLength({min:6, max:6}),

 async (req, res) => {
    try{
        console.log(body("firstName"));
        const errors = validationResult(req);
        console.log(errors);

        if(!errors.isEmpty()){
            return res.status(400).send({errors: errors.array()})
        }

        const user = await User.create(req.body);

        return res.status(200).send(user)
    }
    catch(err){
        return res.status(500).send(err);
    }
})

router.get('/',async (req, res) => {
    try{
        const user = await User.find().lean().exec();

        return res.status(200).send(user);
    }
    catch(err){
        return res.status(500).send({message: err.message});
    }
})


module.exports = router;