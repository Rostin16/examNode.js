const { default: mongoose } = require("mongoose");

const blogSchema= new mongoose.Schema({
    username: { 
                type: String, 
                required: true,
             },
    email: { 
                type: String,
                required: true,
           },
    password: { type: String,
         required: true },
    createdAt: { type: Date,
         default: Date.now },
      
},{timestamps:true})
const userModel=mongoose.model('userModel',blogSchema);
module.exports=userModel;