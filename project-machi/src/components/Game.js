import { useState } from "react"
import './Game.scss'
import machiLogo from './images/machi-white.png'

function Game(props) {
  // const [counter, setCounter] = useState(0)

  return (
    <div className="Game">
      <section className="game-board">
        <section className="player-boxes">
          <div></div>
        </section>
        <section className="communal-side">
          <img className="machi-logo" src={machiLogo} alt="machi koro logo" />
          <div className="dice-section">
            <div className="single-die dice">1</div>
            <div className="double-dice dice">2</div>
          </div>
          <div className="shop-section">

          </div>
          <div className="gamelog">
            <h1>GAME LOG</h1>
            <p>hello</p>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Game