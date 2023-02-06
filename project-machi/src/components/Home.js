import { useState } from "react"
import './Home.scss'
import machiLogo from './images/machi-white.png'
import HowToModal from "./Modals/How_To_Modal"
import StartModal from "./Modals/Start_Modal"
import PlayerModal from "./Modals/PlayerCount"

function Home() {
  const [displayHowToModal, setHowToModal] = useState(false)
  const [displayStartModal, setStartModal] = useState(false)
  const [displayPlayerModal, setPlayerModal] = useState(false)
  const [playerCount, setPlayerCount] = useState(0)


  return (
    <div className="Home">
      <section className="modal">
        <section>
          {displayHowToModal && <HowToModal
            setHowToModal={setHowToModal} />}
        </section>
        <section>
          {displayStartModal && <StartModal
            setStartModal={setStartModal}
            setPlayerModal={setPlayerModal}
            setPlayerCount={setPlayerCount} />}
        </section>
        <section>
          {displayPlayerModal && <PlayerModal
            setPlayerModal={setPlayerModal}
            playerCount={playerCount} />}
        </section>
      </section>

      <header className="machi-logo">
        <img src={machiLogo} alt="machi koro logo" />
      </header>
      <section className="home-btns">
        <div className="button-box">
          <button
            className="home-btn start-btn"
            onClick={() => { setStartModal(true) }}>
          </button>
          <h1>START</h1>
        </div>
        <div className="button-box">
          <button
            className="home-btn how-to-btn"
            onClick={() => { setHowToModal(true) }}>
          </button>
          <h1>HOW TO PLAY</h1>
        </div>
      </section>

    </div>
  )
}

export default Home