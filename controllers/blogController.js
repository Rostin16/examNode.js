const blog = require("../models/blogModel");

// index
module.exports.index = async (req, res) => {
  try {
    let data = await blog.find();
    res.render("index", { data });
  } catch (error) {
    console.error(error.message);
   
  }
};

// form
module.exports.form = async (req, res) => {
  try {
    res.render("form");
  } catch (error) {
    console.log(error);
  }
};

// submit
module.exports.submit = async (req, res) => {
  const { title, content, image, author } = req.body;
  console.log(req.body);
  
  try {
    await blog.create({ title, image, author, content });
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error submitting data");
  }
};

// delete
module.exports.deleteData = async (req, res) => {
  let { id } = req.params;
  try {
    await blog.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

// edit
module.exports.getEditData = async (req, res) => {
  let id = req.query.id;
  try {
    let data = await blog.findById(id);
    res.render("editData", { data });
  } catch (error) {
    console.log(error);
  }
};

module.exports.editData = async (req, res) => {
  let { id } = req.params;
  const { title, image, author, content } = req.body;

  try {
    await blog.findByIdAndUpdate(id, { title, image, author,content});
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

