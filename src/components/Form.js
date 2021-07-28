import React from 'react'

function form() {
    return (
        <div>
         <form action="">
        <input type="text" className="todo-input" />
        <button className="todo-button" type="submit">
            <i className="fa fa-plus-square" aria-hidden="true"></i>
        </button>
        <div className="select">
            <select name="todos" className="filter-todo">
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
