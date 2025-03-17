const passport = require("passport");
const localStrategy=require("passport-local").Strategy;
const userModel = require("../models/userModel");

passport.use(new localStrategy(async(username,password,done)=>{
try {
    let user = await userModel.findOne({username:username});
    if(user){
        if (user.password===password) {
            return done(null,user);
            
        } else {
            return done(null,false);

        }

    }else{
       return done(null,false);
    }
} catch (error) {
   return done(error,false);
    
}
}));
  passport.serializeUser((user,done)=>{
    return done(null,user.id);
  })
passport.deserializeUser(async(id,done)=>{
    let user = await userModel.findById(id);
    return done(null,user);
});
module.exports = passport;