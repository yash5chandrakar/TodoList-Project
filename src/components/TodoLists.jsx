import React from 'react'
import TodoItem from './TodoItem'

const TodoLists = (props) => {
    const { todos, deleteTodo, handleCheck } = props

    return (
        <div className='todosDiv'>
            {todos.length === 0 ? <h1 align="center" style={{ background: "linear-gradient(to left, white, greenyellow)" }}>No Tasks Available</h1> : todos.map((item) => {
                return <TodoItem handleCheck={handleCheck} key={item.id} deleteTodo={deleteTodo} item={item} />
            })}
        </div>
    )
}

export default TodoLists
