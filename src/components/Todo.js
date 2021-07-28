import React from 'react'

function Todo({ text, todo, todos, setTodos }) {

    const deleteHandler = () => {
        setTodos(todos.filter(element => element.id !== todo.id))

    }
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }

    return (
        <div>
            <div className="todo">
                <li className={`todo-item ${todo.completed ? "checked" : "" }`}>
                    {text}
                </li>
                <button className="check-btn" onClick={completeHandler}><i className="fa fa-check" aria-hidden="true"></i></button>
                <button className="trash-btn" onClick={deleteHandler}><i className="fa fa-trash" aria-hidden="true"></i></button>
            </div>
        </div>
    )
}

export default Todo
