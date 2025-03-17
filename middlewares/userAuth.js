// const userAuth=(req,res,next)=>{
//     let{user} =req.cookies;
//     if(user){
//         return next();
//     }
//     return res.redirect('/login');
// }
// module.exports= userAuth;
const userAuth = (req, res, next) => {
    if (req.user) {
        console.log("User authenticated:", user);
        return next();
    }

    return res.redirect('/login');
};

module.exports = userAuth;
