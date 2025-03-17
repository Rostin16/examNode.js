const { default: mongoose } = require("mongoose");

const blogSchema= new mongoose.Schema({
    userId : String,
    image: String,
    blog_title: String,
    tags: String,
    username: String,
    discription: String,


})
const blogModel = mongoose.model('blogModel', blogSchema);
module.exports = blogModel;