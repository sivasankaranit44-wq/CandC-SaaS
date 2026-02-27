const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema({
    userId: {type:String, required:true},  // firebase user ID 
    items : [
        {
            productId : {type: mongoose.Schema.Types.ObjectId, ref:"Product"},
            quantity:{type:Number,default:1}
        }
    ]
}, {timestamps:true})

module.exports=mongoose.model("cart",cartSchema)