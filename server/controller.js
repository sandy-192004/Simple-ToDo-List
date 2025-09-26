const router = require("./route");
const todoModel = require("./model");


const addTask = async(req,res) => {
    const task = req.body.task;
    
    try{
        
        const newTask = new todoModel({ task });
        await newTask.save();

        return res.status(200).json(newTask);
    }
    catch(error){
        return res.status(404).json({message:error.message})
    }
}


const getTask = async(req,res) => {
    try{
        const tasks = await todoModel.find();
        return res.status(200).json(tasks);
    }
    catch(error){
        return res.status(404).json({message:error.message})
    }
}

module.exports = {
    addTask,
    getTask
    }
