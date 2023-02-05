import { useState } from "react"
import machiLogo from './images/machi-white.png'
import './Home.scss'
import HowToModal from "./Modals/How_To_Modal"
import StartModal from "./Modals/Start_Modal"

function Home() {
  const [displayHowToModal, setHowToModal] = useState(false)
  const [displayStartModal, setStartModal] = useState(false)

  return (
    <div className="Home">
      <section className="modal">
        {displayHowToModal && <HowToModal setHowToModal={setHowToModal} />}
      </section>
      <section>
        {displayStartModal && <StartModal setStartModal={setStartModal} />}
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