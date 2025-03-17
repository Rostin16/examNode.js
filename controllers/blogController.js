const blogModel = require("../models/blogModel");

module.exports.blogFormPage=(req,res)=>{
    return res.render('blog');

};
 module.exports.blogCreate =async (req,res)=>{
    try {
        await blogModel.create(req.body);
        console.log('Blog Created successfully!');
        return res.redirect(req.get('Referrer') || '/');
        
        
    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || '/');
        
    }
 
 }


 module.exports.blogCardPage=async (req,res)=>{
    try {
        let blog = await blogModel.find({});
        return res.render('blogCard',{blogs});
    } catch (error) {
        console.log(error.message);
        return res.render('blogCard', {blogs:[]});
             
    }
 };
