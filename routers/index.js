const { Router } = require("express");
const userRouter = require("./userRouter");
const blogRouter= require("./blogRouter");

const router=Router();

router.use('/',userRouter);
router.use('/',blogRouter);



module.exports = router;

