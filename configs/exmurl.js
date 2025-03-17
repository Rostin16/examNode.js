const { default: mongoose } = require("mongoose");
require('dotenv').config();

let url=process.env.Exm_DB;
const db=async () => {
    try {
        console.log(url);
        await mongoose.connect(url);
        console.log("Database Connected successfully!");
        
        
    } catch (error) {
        console.log("sorry!Database not connected!");
        console.log(error.messagge);
        
        
    }
}
module.exports=db;