import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Messages from './components/Messages'
import Home from './views/Home'

import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
