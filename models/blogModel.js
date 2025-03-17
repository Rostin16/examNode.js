const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  author: String,
  content: String,
  
})

const blog = mongoose.model("blogTbl", blogSchema);
module.exports = blog;