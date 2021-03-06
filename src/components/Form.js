import React from 'react'

function form({setInputText , todos , setTodos , inputText , setStatus}) {

    const inputTextHandler = (e) => {
        setInputText(e.target.value) 
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([...todos,
             { text : inputText ,
               completed : false , 
               id: Math.random()*1000}
         ])
         setInputText ("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }




    return (
        <div>
         <form action="">
        <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler}/>
        <button className="todo-button" type="submit" onClick={submitTodoHandler} >
            <i className="fa fa-plus-square" aria-hidden="true"></i>
        </button>
        <div className="select">
            <select name="todos" className="filter-todo" onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        </form>
    </div>
    )
}

export default form
