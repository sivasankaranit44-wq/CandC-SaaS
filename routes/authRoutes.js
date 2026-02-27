// Handling user registration and Login
const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const User = require("../models/user")

// register route
router.post("/register",async(req,res)=>{
    try{
        // Hashing password before saving it
        console.log("Request Body", req.body)
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        await newUser.save()
        res.json({success:true, message: "User has been registered Successfully"})
    }catch(err){
        res.status(500).json({success:false, error: err.message})
    }

})

// Login Route 
router.post("/login", async(req,res)=>{
    try
    {
        const user = await User.findOne({email:req.body.email})
        if (!user) return res.status(400).json({ success: false, message: "User not found" });


        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if(!isMatch) return res.status(400).json({success:false, message:"Invalid Credentials"})
            res.json({success:true,message:"Login Successfull!"})
    } catch(err)
        {
            res.status(500).json({success:false, error: err.message})
        }
})

module.exports = router