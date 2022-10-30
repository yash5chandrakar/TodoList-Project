import React from 'react'

const TodoItem = (props) => {
    const { item, deleteTodo, handleCheck } = props

    return (
        <div className='todoItem' >
            <input className='todoCheck' type={'checkbox'} onChange={() => handleCheck(item.id)} /><span style={{ textDecoration: (item.completed) ? "line-through" : "", color: (item.completed) ? "grey" : "" }} className='todoData'>{item.data}</span><button className='todoDelete' onClick={() => deleteTodo(item.id)}>X</button>
        </div >
    )
}

export default TodoItem
