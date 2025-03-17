const { error } = require("console");
const express = require("express");
const db = require("./configs/exmurl");
const { router } = require("./routers/blogRouter");
const cookieParser = require("cookie-parser");

const port = 8000;
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(router);

app.listen(port, (error) => {
  db();
  if (!error) {
    console.log("Server Start at:- http://localhost:" + port);
  }
})