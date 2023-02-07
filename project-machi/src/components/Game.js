import { useState } from "react"
import './Game.scss'
import { images } from '../machi_images'
import { useLocation } from "react-router-dom"

function Game({ }) {
  const location = useLocation()
  const playerNames = location.state.playerNames
  const [playerState, setPlayerState] = useState({
    isActive: true,
    name: '',
    coins: 3,
    establishments: ["1B", "2B", "3B"],
    landmarkTrain: false,
    landmarkShop: false,
  })

  console.log({ playerNames });


  return (
    <div className="Game">
      <section className="game-board">
        <section className="player-boxes">
          <div></div>
        </section>
        <section className="communal-side">
          <img className="machi-logo" src={images.machiLogo} alt="machi koro logo" />
          <div className="dice-section">
            <div className="single-die dice">1</div>
            <div className="double-dice dice">2</div>
          </div>
          <div className="shop-section">

          </div>
          <div className="gamelog">
            <h1>GAME LOG</h1>
            <p>{playerNames[0]}</p>
            <p>{playerNames[1]}</p>
            <p>{playerNames[2]}</p>
            <p>{playerNames[3]}</p>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Game

// Next Steps:
// Create playername array in PlayerCount.js file in order to loop through 
// Bring it over to Game.js file
// Create function createPlayers() that loops through the playerName array and assign the state to each individual player. Assign the player name to the name key at this step too.

// All establishment cards will be objects
// Hard code the cards first (just 2 cards for now)