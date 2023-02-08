import { useState, useEffect } from "react"
import './Game.scss'
import { images } from '../machi_images'
import { useLocation } from "react-router-dom"
import { cards } from "./Cards"

function Game() {
  // Receiving the playerNames array from the playerNames modal
  const location = useLocation()
  const playerNames = location.state.playerNames

  // useStates
  const [players, setPlayers] = useState([])
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
  const [selectedCard, setSelectedCard] = useState(null)

  // declaring variables
  const currentPlayer = players[currentPlayerIndex]
  const gameLog = document.querySelector('.gamelog')

  // Creating each player's objects using the playerNames array
  const createPlayers = () => {
    const newPlayers = playerNames.map(name => ({
      name: name,
      coins: 10,
      establishments: [cards[2], cards[3], cards[4], cards[2]],
      hasLandmarkTrain: false,
      hasLandmarkShop: false,
    }))
    setPlayers(newPlayers)
    return newPlayers[currentPlayerIndex]
  }

  // Welcoming message
  const greeting = () => {
    const player = createPlayers()
    const greeting = document.createElement('p')
    greeting.innerHTML = `Welcome to Machi Koro! All players start with 4 coins. The current player is ${player.name}`
    document.querySelector('.gamelog').appendChild(greeting);
  };

  const rollDie = () => {
    if (currentPlayer) {
      const rolledNumber = Math.floor(Math.random() * 6) + 1
      const logRolledNum = document.createElement('p');
      logRolledNum.innerHTML = `${currentPlayer.name} rolled a ${rolledNumber}`;
      document.querySelector('.gamelog').appendChild(logRolledNum);

      // Checking for activation and adding coins balance for each player
      players.forEach((player) => {
        checkActivation(player, rolledNumber)
      })
    }
  }

  let activationLogged = false
  const checkActivation = (player, rolledNumber) => {
    player.establishments.forEach((card) => {
      if (card.activationNum === rolledNumber) {
        player.coins += card.effect
        updateCoinBalance(player)
        if (!activationLogged) {
          logActivation(card)
          logOptions(player)
          activationLogged = true

        }
      }
    })
    if (!activationLogged) {
      logOptions(player)
      activationLogged = true
    }
  }

  // Updating the coin balance on the page
  const updateCoinBalance = (player) => {
    const playerCoinBalance = document.querySelector(`.${player.name}-coin`)
    playerCoinBalance.innerHTML = `${player.coins} coins`
  }

  // Checking Phase
  const logActivation = (card) => {
    gameLog.scrollTop = gameLog.scrollHeight
    const cardActivated = document.createElement('p')
    cardActivated.innerHTML = `${card.name} was activated. All players receive ${card.effect} coins for each ${card.name} card they own`
    document.querySelector('.gamelog').appendChild(cardActivated)
  }

  const logOptions = () => {
    gameLog.scrollTop = gameLog.scrollHeight
    const listOptions = document.createElement('p')
    listOptions.innerHTML = `${currentPlayer.name} can now choose to either buy a card from the shop, or pass their turn.`
    document.querySelector('.gamelog').appendChild(listOptions)
  }

  // Purchase Phase
  const selectToBuy = (event) => {
    gameLog.scrollTop = gameLog.scrollHeight
    setSelectedCard(event)
    const logSelection = document.createElement('p')
    logSelection.innerHTML = `${currentPlayer.name} has selected ${event.name}. Press BUY to purchase card, or press PASS to end your turn.`
    document.querySelector('.gamelog').appendChild(logSelection)
  }


  const buyCard = () => {
    console.log(selectedCard.name, selectedCard.cost)
    if (currentPlayer && selectedCard) {
      if (currentPlayer.coins >= selectedCard.cost) {
        currentPlayer.establishments.push(selectedCard)
        currentPlayer.coins -= selectedCard.cost
        if (selectedCard.name === "Train Station") {
          currentPlayer.hasLandmarkTrain = true
        } else if (selectedCard.name === "Shopping Mall") {
          currentPlayer.hasLandmarkShop = true
        }
        setPlayers([...players])
      }
      endTurn()
    }

  }

  const endTurn = () => {
    if (currentPlayer.hasLandmarkTrain && currentPlayer.hasLandmarkShop) {
      const declareWinner = document.createElement('h2')
      declareWinner.innerHTML = `${currentPlayer.name} has won!`
      document.querySelector('.gamelog').appendChild(declareWinner)
    } else {
      setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
    }
  }

  useEffect(() => {
    greeting()
  }, [])

  useEffect(rollDie, [currentPlayer])




  return (
    <div className="Game">
      <section className="game-board">
        <section className="player-boxes">
          {players.map(player => (
            <div key={player.name}>
              <section className="player-box">

                <div className="left-side">
                  <div className="name-coins">
                    <h1>{`${player.name}`}</h1>
                    <p className={`${player.name}-coin`}>{player.coins} coins</p>
                  </div>

                  <div className="establishments">
                    {player.establishments.map((card, index) => (
                      <div key={index}>
                        <div className="card">{card.name}</div>

                      </div>
                    ))}
                  </div>
                </div>
                <div className="right-side">

                </div>
              </section>

            </div>
          ))}
        </section>

        <section className="communal-side">
          <img className="machi-logo" src={images.machiLogo} alt="machi koro logo" />

          <div className="dice-section board-section">
            <div className="single-die dice">1</div>
            <div className="double-dice dice">2</div>
          </div>

          <div className="shop-section board-section">
            {cards.map(card => (
              <div key={card.name}>
                <div className="card-slot">
                  <div
                    className={`${card.name} shop-card`}
                    onClick={() => selectToBuy(card)}>
                  </div>
                  <p>{`${card.name}`}</p>
                  <p>{`Cost:${card.cost}`}</p>
                  <p>{`Effect:${card.effect}`}</p>
                </div>

              </div>
            ))}
          </div>

          <div className="action-section board-section">
            <button
              className="buy-btn action-btn"
              onClick={() => buyCard()}
            >BUY</button>
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
