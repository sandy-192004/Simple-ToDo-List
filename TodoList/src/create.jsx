import axios from "axios";
import { useState } from "react";

function create() {
  const [task, setTask] = useState();

  const handleAdd = async () => {
    try {
      const res = await axios.post("http://localhost:5000/add", { task });
      console.log( res.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter Task"></input>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default create;
