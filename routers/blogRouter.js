const { Router } = require("express");
const { index, form, submit, deleteData, getEditData, editData } = require("../controllers/blogController");
const { formAuth, singAuth, isAuth } = require("../middlewares/blogAuth");
const { signup, signupPage, login, loginPage, logout } = require("../controllers/userController");

const router = Router();

router.get("/", index);
router.get("/form", form);
router.post("/submit", formAuth, submit);
router.get("/deleteData/:id", deleteData);
router.get("/editData", getEditData);
router.post("/editData/:id", formAuth, editData);

router.get("/signup", signupPage);
router.post("/signup", singAuth, signup);
router.get("/login", loginPage);
router.post("/login", login);
router.get("/logout", logout);

module.exports = { router };