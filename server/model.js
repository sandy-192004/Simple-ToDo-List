const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    task:{
        type:String,
        required:true,
    
    }
})
const todoModel = mongoose.model("todo",schema);

module.exports = todoModel;