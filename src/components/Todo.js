import React from 'react'

function Todo({ text , todo , todos , setTodos }) {

    const deleteHandler = () => {
        setTodos(todos.filter(element => element.id !== todo.id))
    }
    return (
        <div>
            <div className="todo">
                <li className="todo-item">
                    {text}
                </li>
                <button className="check-btn"><i className="fa fa-check" aria-hidden="true"></i></button>
                <button className="trash-btn" onClick={deleteHandler}><i className="fa fa-trash" aria-hidden="true"></i></button>
            </div>
        </div>
    )
}

export default Todo
