import React, { useState } from 'react'
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';
import tasks from './imgs/tasks.svg'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <div className="row">
      
        <div className="col-6">
          <header>
            <h1>Tasks List</h1>
          </header>
          <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
          <TodoList setTodos={setTodos} todos={todos} />
        </div>
        <div className="col-6">
        <img alt="tasks svg" src={tasks} className="img-fluid"/>
        </div>
      </div>
    </div>
  );
}

export default App;
