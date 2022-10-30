import React, { useState } from 'react'

const AddTodoList = (props) => {
    const { addTodo, deleteComp } = props
    const [itemData, setItemData] = useState("");

    function handleAdd() {
        if (itemData === "") {
            alert("Task Cannot be Empty !")
            return
        }
        const newDate = new Date().getTime();
        const item = {
            id: newDate,
            data: itemData,
            completed: false
        }
        addTodo(item)
        setItemData("")
    }
    return (
        <div className='AddTodoDiv'>
            <h1 className='mainHeading'>Todo-List Application</h1>
            <div className='taskAddDiv'>
                {/* <h3 className='subHeading'>Enter Task Here :-</h3> */}
                <input className='inputData' value={itemData} placeholder='Add Task' type="text" onChange={(e) => setItemData(e.target.value)} /> <br />
                <button className='submitBtn' onClick={handleAdd}>ADD</button>
                <button className='deleteComp' onClick={deleteComp}>Delete Completed</button>
            </div>
        </div>
    )
}

export default AddTodoList
