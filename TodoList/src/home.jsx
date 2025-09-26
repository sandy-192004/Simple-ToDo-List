import React, { useEffect, useState } from 'react';
import './home.css';   
import Create from './create';
import { BsCircleFill } from "react-icons/bs";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() =>{
    const getTodos = async () => {
      try {
        const res = await fetch('http://localhost:5000/get');
        const data = await res.json();
        setTodos(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    getTodos();

  })

  return (
    <div className="home">
      <h2>Todo List</h2>

      <div className="create_form">
        <Create />

        {todos.length === 0 ? (
          <div><h2>No Todos</h2></div>
        ) : (
          todos.map((todo) => (
            <div className = "task" >
              <div className='checkbox'> </div>
              <BsCircleFill className = 'icon'/>
              <p>{todo.task}</p>
              </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
