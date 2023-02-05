import { useState } from "react"
import machiLogo from './images/machi-white.png'
import './Home.scss'

function Home(props) {
  // const [counter, setCounter] = useState(0)

  return (
    <div className="Home">
      <header className="machi-logo">
        <img src={machiLogo} alt="machi koro logo" />
      </header>
      <h1>hello</h1>
    </div>
  )
}

export default Home