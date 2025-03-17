const { Router } = require("express");
const blogController = require('../controllers/blogController')
const userAuth=require("../middlewares/userAuth");
const blogRouter= Router();

blogRouter.use(userAuth);

blogRouter.get('/blog-form',blogController.blogFormPage);
blogRouter.post('/blog-form', blogController.blogCreate);

blogRouter.get("/blog-view" , blogController.blogView);

blogRouter.get("/blog/delete/:id",blogController.blogDelete);

blogRouter.get("/blog/edit/:id",blogController.blogEditPage);
blogRouter.post("/blog/edit/:id",blogController.blogEdit);

blogRouter.get("/blog-card",blogController.blogCardPage);



module.exports = blogRouter;