import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }
  return (
    <>
      <h1>React course with hitesh</h1>
      <h2>Counter value : {counter}</h2>
      <button
        onClick={addValue}
      >Add value</button>{" "}
      <button
        onClick={removeValue => {
          setCounter(counter - 1)
        }}
      >Remove value</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
