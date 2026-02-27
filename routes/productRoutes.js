const express = require("express")
const router = express.Router()
const Product = require("../models/Product")

// getting all products
router.get("/", async (req,res) => {
    try{
        const products = await Product.find()
        res.json(products)
    } catch(err){
        res.status(500).json({error: "Failed to fetch!"})
    }
})

// adding new products
router.post("/", async (req,res)=>{
    try{
        const{name,desc, price, category} = req.body
        const newProduct = new Product({name, desc, price, category})
        await newProduct.save()
        res.json(newProduct)
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

module.exports = router