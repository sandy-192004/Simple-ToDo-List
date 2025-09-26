const express = require("express");
const router = express.Router();
const {addTask,getTask} = require("./controller.js");


router.post("/add" ,addTask);
router.get("/get",getTask);

module.exports = router;