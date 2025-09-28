const router = require("./route");
const todoModel = require("./model");


const addTask = async(req,res) => {
    const task = req.body.task;
    const done = req.body.task;
    
    try{
        
        const newTask = new todoModel({ task,done });
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

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "Invalid ID" });
    }

    const todo = await todoModel.findById(id);
    if (!todo) {
      return res.status(404).json({ msg: "Todo not found" });
    }

    todo.done = !todo.done;
    await todo.save();

    return res.status(200).json({ msg: "Todo updated", todo });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTodo = await todoModel.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.json({ message: "Todo deleted successfully", deletedTodo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};





module.exports = {
    addTask,
    getTask,
    updateTask,
    deleteTask
    }
