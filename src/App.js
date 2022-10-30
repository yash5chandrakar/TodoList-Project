import { useState } from 'react';
import './App.css';
import AddTodoList from './components/AddTodoList';
import TodoLists from './components/TodoLists';

function App() {
  const [todos, setTodos] = useState([]);

  function deleteComp() {
    const newTodos = todos.filter((item) => item.completed === false)
    setTodos(newTodos)
  }

  function addTodo(item) {
    setTodos(oldstate => [...oldstate, item])
  }

  function deleteTodo(itemId) {
    const newTodos = todos.filter((item) => item.id !== itemId)
    setTodos(newTodos)
  }

  function handleCheck(itemId) {
    const newTodos = todos.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed }
      }
      else {
        return item
      }
    })
    setTodos(newTodos)
  }

  return (
    <div className='outerDiv'>
      <AddTodoList addTodo={addTodo} deleteComp={deleteComp} />
      <TodoLists handleCheck={handleCheck} deleteTodo={deleteTodo} todos={todos} />
    </div>
  );
}

export default App;

//  item > id, data, completed(boolean)
