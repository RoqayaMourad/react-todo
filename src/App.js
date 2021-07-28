import React, { useState , useEffect } from 'react'
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';
import tasks from './imgs/tasks.svg'

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status , setStatus] = useState('all')
  const [filteredTodos , setFilterTodos] = useState([])




  useEffect( () => {
    // run once
   getLocalStorage()
  }, [])


  useEffect( () => {
    filterHandler()
    saveLocalStorage()
  }, [todos , status])


  const filterHandler = () => {
    switch(status){
      case 'completed' :
        setFilterTodos(todos.filter(todo => 
          todo.completed === true 
        ))
      break
      case 'uncompleted' : 
        setFilterTodos(todos.filter(todo => 
          todo.completed === false 
        ))
      break
      default : 
        setFilterTodos(todos) 
      break
    }
  }

  const saveLocalStorage = () => { 
      localStorage.setItem("todos",JSON.stringify(todos))
  }

  const getLocalStorage = () => {
    if(localStorage.getItem("todos")=== null) {
      localStorage.setItem("todos" , JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }
  

  return (
    <div className="container">
      <div className="row">

        <div className="col-md-6 col-12">
          <header>
            <h1>Tasks List</h1>
          </header>
          <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}/>
          <TodoList setTodos={setTodos} todos={todos}  filteredTodos={filteredTodos}  />
        </div>
        <div className="col-md-6 col-12">
        <img alt="tasks svg" src={tasks} className="img-fluid"/>
        </div>
      </div>
    </div>
  );
}

export default App;
