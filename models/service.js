// writing schema for services
const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema({
    name:{type: String, required: true},
    desc:{type: String, required: true},
    price:{type:Number},
    category:{type:String, required:true} //Freelancer, startup and corporate
},{timestamps:true})

module.exports = mongoose.model("Service", serviceSchema)