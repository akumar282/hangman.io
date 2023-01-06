import React from 'react'
import { Link} from 'react-router-dom'
import './css/startStyles.scss'
export default function Start () {
  return (
    <div className = "start">
      <h1>Hangman</h1>
      <img src = "/images/Logo.png"/>
      <div className = "startButtons">
        <Link to = "./create_game">
          <button className = "startButton"> Create Game </button>
        </Link>
        <Link to = "./game">
          <button className = "startButton"> Start Game </button>
        </Link>
        <Link>
          <button className = "soloButton"> Play Solo</button>
        </Link>
      </div>
      <div className='footer'>
          <button className = "helpButton"> <img className = "helpImg" src = "/images/helpicon.png"/> </button>
      </div>
    </div>
  )
}
