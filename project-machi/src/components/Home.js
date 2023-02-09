import { useState } from "react"
import './Home.scss'
import { images } from '../machi_images'
import HowToModal from "./Modals/How_To_Modal"
import StartModal from "./Modals/Start_Modal"
import PlayerModal from "./Modals/PlayerCount"
import SecretModal from "./Modals/Secret"

function Home() {
  const [displayHowToModal, setHowToModal] = useState(false)
  const [displayStartModal, setStartModal] = useState(false)
  const [displayPlayerModal, setPlayerModal] = useState(false)
  const [displaySecretModal, setSecretModal] = useState(false)
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
        <section>
          {displaySecretModal && <SecretModal
            setSecretModal={setSecretModal} />}
        </section>
      </section>

      <header className="machi-logo-container">
        <img className="machi-logo" src={images.machiLogo} alt="machi koro logo" />
      </header>
      <section className="home-btns">
        <div className="msg-box">
          <h1 className="welcome-msg">
            Welcome to Machi Koro!
          </h1>
          <h4 className="welcome-msg">
            If this is your first time, and you are not sure how the game works, I think that chopper pilot is a veteran. Maybe ask him....Otherwise, click START to begin!
          </h4>
        </div>

        <div className="button-box">
          <button
            className="home-btn start-btn"
            onClick={() => { setStartModal(true) }}>
          </button>
          <h1>START</h1>
        </div>
      </section>

      <div className="flight-path">
        <img
          src={images.helicopter}
          alt="helicopter flying right to left" className="helicopter"
          onClick={() => { setHowToModal(true) }} />
      </div>
      <div className="shadow-path">
        <img
          src={images.shadow}
          alt="helicopter shadow" className="shadow" />
      </div>
      <div className="car-path">
        <img
          src={images.car}
          alt="car driving left to right" className="car"
          onClick={() => { setSecretModal(true) }} />
      </div>

    </div>
  )
}

export default Home