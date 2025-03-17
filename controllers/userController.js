const { Cookie } = require("express-session");
const userModel = require("../models/userModel");

module.exports.signupPage = (req, res) => {
  return res.render("signup");
};

module.exports.signup = async (req, res) => {
  try {
    await userModel.create(req.body);
    console.log("User Created!");
    return res.redirect('/login');
  } catch (error) {
    console.log(error.message);
    return res.redirect(req.get("Referrer") || "/");
  }
};

module.exports.logInPage = (req, res) => {
  return res.render('./login');
};

module.exports.login =  (req, res) => {
 return res.redirect("/blog-card");
};
module.exports.logout=(req,res) => {
  return res.clearCookie('user').redirect('/login');
}

// module.exports.login = async (req, res) => {
//   try {
//     let user = await userModel.findOne({ username: req.body.username });

//     if (!user) {
//       console.log("User not found!");
//       return res.redirect('/login');
//     }

//     if (user.password !== req.body.password) {
//       console.log("Invalid password!");
//       return res.redirect('/login');
//     }

//     console.log("Login successful!");

//     // Set a cookie with secure options
//     res.cookie('user', user.id, {
//       httpOnly: true, // Prevents client-side JS access
//       secure: false,  // Set to `true` if using HTTPS
//       maxAge: 1000 * 60 * 60 * 24, // 1 day expiration
//     });

//     console.log("Cookie set successfully:", user.id);
//     return res.redirect('/blog-form');

//   } catch (error) {
//     console.error("Login error:", error.message);
//     return res.redirect('/login');
//   }
// };


