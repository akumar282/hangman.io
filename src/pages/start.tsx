import React from 'react'
import { Link} from 'react-router-dom'
import './css/startStyles.scss'
export default function Start () {
  const [isLoginOpen, setIsLoginOpen] = React.useState(false)
  return (
    <div className = "start">
      <HelpPopup trigger={isLoginOpen} setTrigger={setIsLoginOpen}/>
      <h1>Hangman</h1>
      <img src = "/images/Logo.png"/>
      <div className = "startButtons">
        <Link to = "./create_game">
          <button className = "startButton"> Create Game </button>
        </Link>
        <Link to = "./game">
          <button className = "startButton"> Start Game </button>
        </Link>
        <Link to = "">
          <button className = "soloButton"> Play Solo</button>
        </Link>
      </div>
      <div className='footer'>
          <button onClick = {() => setIsLoginOpen(true)} className = "helpButton" > 
            <img className = "helpImg" src = "/images/helpicon.png"/> 
          </button>
      </div>
    </div>
  )
}
function HelpPopup (props) { 
  return props.trigger ? (
    <div className = "popupBack" onClick={() => props.setTrigger(false)}>
      <div className = "helpPopup">
        <h1> Help </h1>
        <p> This is a game of hangman. You can play with friends or by yourself. </p>
        <p> To play with friends, click on "Create Game" and send the link to your friends. </p>
        <p> To play solo, click on "Play Solo". </p>
        <p> To join a game, click on "Start Game" and enter the game code. </p>
        <p> To see the rules, click on "Rules". </p>
      </div>
    </div>
      ) : (
        <React.Fragment></React.Fragment>
      );

}

