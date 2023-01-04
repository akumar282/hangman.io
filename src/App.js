import './App.css'
import React from 'react'
import Game from './pages/game.js'
import Start from './pages/start.js'
import { Route, Routes } from 'react-router-dom'

function App () {
  return (
      <div className="containers">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path ="/game" element={<Game />} />
        </Routes>
      </div>
  )
}

export default App
