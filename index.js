const bodyParser = require('body-parser');
const express=require('express');
const db = require('./configs/exmurl');
const passport = require('passport');
const app = express();
const port = 8080;
 
app.set("view engine","ejs");
// app.use(session({
//     secret: "secret",
//     resave: true,
//     saveUninitialized: true,
//     cookie: {
//       maxAge: 1000*60*60
//     }
//   }));
  app.use(passport.initialize());
app.use(passport.session());
app.use('uploads/',express.static(__dirname+'/uploads'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
  app.use("/",require('./routers'));
   
app.listen(port,(error)=>{
    if(!error){
        db();
        console.log("server start http://localhost:"+port);
    }
    else{
        console.log(error.message);   
    }
})
module.exports=passport;