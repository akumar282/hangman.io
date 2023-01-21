import './App.css'
import React from 'react'
import Game from './pages/game'
import CreateGame from './pages/create_game'
import NotFound from './pages/not_found'
import Start from './pages/start'
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
