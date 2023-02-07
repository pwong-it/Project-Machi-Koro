import { useState, useEffect } from "react"
import './Game.scss'
import { images } from '../machi_images'
import { useLocation } from "react-router-dom"

function Game({ }) {
  const location = useLocation()
  const playerNames = location.state.playerNames

  const [players, setPlayers] = useState([])

  const createPlayers = () => {
    const newPlayers = playerNames.map(name => ({
      name: name,
      coins: 3,
      establishments: ["B1", "B2", "B3"],
      hasLandmarkTrain: false,
      hasLandmarkShop: false,
    }))

    setPlayers(newPlayers)
  }

  useEffect(() => {
    gamePlay()
    createPlayers()

  }, [])



  // useEffect(createPlayers, [])
  // useEffect(gamePlay, [])

  // Establishment Cards
  const B1 = {
    name: "Wheat Field",
    activationNum: 1,
    cost: 1,
    effect: 1,
    isEstablishment: true
  }

  const B2 = {
    name: "Ranch",
    activationNum: 2,
    cost: 2,
    effect: 1,
    isEstablishment: true
  }

  const B3 = {
    name: "Cafe",
    activationNum: 3,
    cost: 2,
    effect: 1,
    isEstablishment: true
  }

  // Landmark Cards
  const LandmarkTrain = {
    name: "Train Station",
    cost: 5,
    isEstablishment: false
  }

  const LandmarkShop = {
    name: "Shopping Mall",
    cost: 7,
    isEstablishment: false
  }

  const cardsForPurchase = [LandmarkTrain, LandmarkShop, B1, B2, B3]

  const gamePlay = () => {
    const greeting = document.createElement('p')
    greeting.innerHTML = `Welcome to Machi Koro!`
    document.querySelector('.gamelog').appendChild(greeting)
    console.log('hi')
  }



  return (
    <div className="Game">
      <section className="game-board">
        <section className="player-boxes">
          <div></div>
        </section>


        <section className="communal-side">
          <img className="machi-logo" src={images.machiLogo} alt="machi koro logo" />

          <div className="dice-section board-section">
            <div className="single-die dice">1</div>
            <div className="double-dice dice">2</div>
          </div>

          <div className="shop-section board-section">
            {cardsForPurchase.map(card => (
              <div key={card.name}>
                <div className="card-slot">
                  <div
                    className={`${card} shop-card`}>
                  </div>
                  <p>{`${card.name}`}</p>
                </div>

              </div>
            ))}
          </div>

          <div className="action-section board-section">
            <button className="buy-btn action-btn">BUY</button>
            <button className="pass-btn action-btn">PASS</button>
          </div>

          <div className="gamelog-section board-section">
            <h1>GAME LOG</h1>
            <div className="gamelog"></div>
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
// Needs key value of isEsablishment: true/false

// Create shop array. Array will only have 2 indexes.
// As users purchase cards from the shop, the shop will pop the purchased card from its array, and push a new card randomly from a library
// *For MVP, the cardsForPurchase will be a hard coded array.


// Order of procedure
// 1. Check player turn. Assign currentPlayer 
// 2. Player rolls die
// 3. Get rolled number
// 4. Loop through each player to check if each player has card that activates
// 5. If so, for each card, use card effect (+n coins for blue cards) for that player
// 6. Current player then has option to buy new card, or pass turn(end turn). 

// When buying card
// 7. user onClick of shop card. Checks which card was clicked on (event.target). Check if establishment or landmark card. Declare as selectedCard
// 8. isDisabled function of purchase button checks if player coin balance >= selectedCard cost
// 9. if true, buy button is abled. if false, console.log('not enough coins')
// 10. If selectedCard = establishment card => purchase button onClick => buyCard(). currentPlayer.establishments.push(selectedCard)
// 11. currentPlayer coin balance - selectedCard Cost (deductCost())
// 12. Else purchase button onClick => buyLandMarkCard(). currentPlayer.
