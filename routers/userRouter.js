const { Router } = require("express");
const userController = require("../controllers/userController");
const passport = require("passport");

const userRouter= Router();

userRouter.get('/',userController.signupPage);
userRouter.post('/user/create',userController.signup);

userRouter.get('/login',userController.logInPage);
userRouter.post('/login',passport.authenticate("local",{failureRedirect:"/login", successRedirect:"/blog-card"}));


userRouter.get('/logout',userController.logout);

  





  module.exports = userRouter;  