const blog = require("../models/blogModel");

// index
module.exports.index = async (req, res) => {
  try {
    let data = await blog.find();
    res.render("index", { data });
  } catch (error) {
    console.log(error);
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
  // console.log(req.body);
  const { title, image, bname, type, date, dsc } = req.body;

  try {
    const newBlog = await blog.create({ title, image, bname, type, date, dsc });
    res.cookie('blogId', newBlog._id);
    res.redirect('/');
  } catch (error) {
    console.log(error);
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
  const { title, image, bname, type, date, dsc } = req.body;

  try {
    await blog.findByIdAndUpdate(id, { title, image, bname, type, date, dsc });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

