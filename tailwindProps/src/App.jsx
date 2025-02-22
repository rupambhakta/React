import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed bottom-14 flex justify-center flex-wrap inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => { setColor('red') }} className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer'  style={{backgroundColor:'red'}}>Red</button>
          <button onClick={() => { setColor('green') }} className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer' style={{backgroundColor:'Green'}}>Green</button>
          <button onClick={() => { setColor('blue') }} className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer' style={{backgroundColor:'Blue'}}>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
