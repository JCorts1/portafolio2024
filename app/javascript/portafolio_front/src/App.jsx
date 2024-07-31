import { useState } from 'react'
import Messages from './components/Messages'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-100 h-screen bg-black flex justify-center content-center'>
      <h1 className='text-lime-500 justify-center content-center'>Portafolio in Progress!</h1>
      <Messages />
    </div>
  )
}

export default App
