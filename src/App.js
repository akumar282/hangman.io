import './App.css'
import React from 'react'
import Game from './pages/game.js'
import CreateGame from './pages/create_game.js'
import NotFound from './pages/not_found.js'
import Start from './pages/start.js'
import { Route, Routes } from 'react-router-dom'

function App () {
  return (
      <div className="containers">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path ="/game" element={<Game />} />
          <Route path ="/create_game" element={<CreateGame />} />
          <Route path = "*" element = {<NotFound/>} />
        </Routes>
      </div>
  )
}

export default App
