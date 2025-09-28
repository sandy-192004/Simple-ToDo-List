import React, { useEffect, useState } from 'react';
import './home.css';
import Create from './Create';
import { BsCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from 'axios';

const Home = () => {
  const [todos, setTodos] = useState([]);

  // Fetch todos
  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get('http://localhost:5000/get');
        setTodos(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    getTodos();
  }, []);

  // Toggle done state
  const handleEdit = async (id) => {
    try {
      const res = await axios.put(`http://localhost:5000/update/${id}`);
      setTodos(todos.map(todo =>
        todo._id === id ? { ...todo, done: res.data.todo.done } : todo
      ));
    } catch (err) {
      console.error(err);
    }
  };

  // Delete todo
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="home">
      <h2>Todo List</h2>

      <div className="create_form">
        <Create addTodo={(newTodo) => setTodos(prev => [...prev, newTodo])} />

        {todos.length === 0 ? (
          <div><h2>No Todos</h2></div>
        ) : (
          todos.map((todo) => (
            <div className="task" >
              {todo.done ? (
                <BsFillCheckCircleFill
                  className="icon"
                  onClick={() => handleEdit(todo._id)}
                />
              ) : (
                <BsCircleFill
                  className="icon"
                  onClick={() => handleEdit(todo._id)}
                />
              )}

              <p className={todo.done ? "line_through" : ""}>
                {todo.task}
              </p>

              <RiDeleteBin6Line
                className="delete-icon"
                onClick={() => handleDelete(todo._id)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
