import { useState } from 'react'
import { Todoprovider } from './contexts'
import './App.css'






function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev)=>{
      
    })
  }

  return (
    <Todoprovider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <h1>New project</h1>
    </Todoprovider>
  )
}

export default App
