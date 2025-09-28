const express = require("express");
const router = express.Router();
const {addTask,getTask,updateTask,deleteTask} = require("./controller.js");


router.post("/add" ,addTask);
router.get("/get",getTask);
router.put("/update/:id",updateTask);
router.delete("/delete/:id",deleteTask)

module.exports = router;