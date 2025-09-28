import axios from "axios";
import { useState } from "react";

function Create({ addTodo }) {
  const [task, setTask] = useState("");

  const handleAdd = async () => {
    if (!task) return; 
    try {
      const res = await axios.post("http://localhost:5000/add", { task, done: false });
      addTodo(res.data); 
      setTask(""); 
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="create">
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Create;
