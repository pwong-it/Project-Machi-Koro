import './Game.scss'
import './Cards.scss'
import { useState, useEffect } from "react"
import { images } from '../machi_images'
import { useLocation } from "react-router-dom"
import { cards } from "./Cards"
import WinModal from './Modals/Win'
import HowToModal from "./Modals/How_To_Modal"


function Game() {
  // Receiving the playerNames array from the playerNames modal
  const location = useLocation()
  const playerNames = location.state.playerNames

  // useStates
  const [players, setPlayers] = useState([])
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
  const [selectedCard, setSelectedCard] = useState(null)
  const [displayWinModal, setWinModal] = useState(false)
  const [displayHowToModal, setHowToModal] = useState(false)
  const [dieRolled, setDieRolled] = useState(false)

  // declaring variables
  const currentPlayer = players[currentPlayerIndex]
  const gameLog = document.querySelector('.gamelog')


  useEffect(() => {
    greeting()
  }, [])

  // Creating each player's objects using the playerNames array
  const createPlayers = () => {
    const newPlayers = playerNames.map(name => ({
      name: name,
      coins: 15,
      establishments: [cards[2], cards[3], cards[4]],
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
    const greeting2 = document.createElement('p')
    greeting.innerHTML = `Welcome to Machi Koro! All players start with ${player.coins} coins. The current player is ${player.name}`
    greeting2.innerHTML = `Hey ${player.name}, click on the die to roll it!`
    document.querySelector('.gamelog').appendChild(greeting);
    document.querySelector('.gamelog').appendChild(greeting2);
  };


  const rollDie = () => {
    if (currentPlayer && !dieRolled) {
      const rolledNumber = Math.floor(Math.random() * 6) + 1
      const logRolledNum = document.createElement('p');
      logRolledNum.innerHTML = `${currentPlayer.name} rolled a ${rolledNumber}`;
      document.querySelector('.gamelog').appendChild(logRolledNum);
      gameLog.scrollTop = gameLog.scrollHeight
      setDieRolled(true)

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
    playerCoinBalance.innerHTML = `${player.coins}<span class="material-symbols-outlined">monetization_on</span>`
  }

  // Checking Phase
  const logActivation = (card) => {
    const cardActivated = document.createElement('p')
    cardActivated.innerHTML = `${card.name} was activated. All players receive ${card.effect} coins for each ${card.name} card they own`
    document.querySelector('.gamelog').appendChild(cardActivated)
    gameLog.scrollTop = gameLog.scrollHeight
  }

  const logOptions = () => {
    const listOptions = document.createElement('p')
    listOptions.innerHTML = `${currentPlayer.name} can now choose to either buy a card from the shop, or pass their turn.`
    document.querySelector('.gamelog').appendChild(listOptions)
    gameLog.scrollTop = gameLog.scrollHeight
  }

  // Purchase Phase
  const selectToBuy = (event) => {
    setSelectedCard(event)
    const logSelection = document.createElement('p')
    logSelection.innerHTML = `${currentPlayer.name} has selected ${event.name}. Press BUY to purchase card, or press PASS to end your turn.`
    document.querySelector('.gamelog').appendChild(logSelection)
    gameLog.scrollTop = gameLog.scrollHeight

  }


  const buyCard = () => {
    if (currentPlayer && selectedCard && dieRolled) {
      checkLandmark()
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
      updateCoinBalance(currentPlayer)
      const logBuy = document.createElement('p')
      logBuy.innerHTML = `${currentPlayer.name} has bought ${selectedCard.name}. That's the end of your turn.`
      document.querySelector('.gamelog').appendChild(logBuy)
      gameLog.scrollTop = gameLog.scrollHeight
      endTurn()
      setDieRolled(false)
    }
  }

  const checkLandmark = () => {
    if (selectedCard.name === "Train Station" && currentPlayer.hasLandmarkTrain) {
      logBought()
      selectToBuy()
    } else if (selectedCard.name === "Shopping Mall" && currentPlayer.hasLandmarkShop) {
      logBought()
      selectToBuy()
    }
  }

  const logBought = () => {
    const logBought = document.createElement('p')
    logBought.innerHTML = `Hey ${currentPlayer.name}! You have already bought ${selectedCard.name}. You only need one of each type of Landmark. *Hint: Aim for a Landmark you haven't bought yet!`
    document.querySelector('.gamelog').appendChild(logBought)
    gameLog.scrollTop = gameLog.scrollHeight
  }

  // Option Phase
  const endTurn = () => {
    if (currentPlayer.hasLandmarkTrain && currentPlayer.hasLandmarkShop) {
      setWinModal(true)
    } else {
      setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length)
      const nextPlayer = players[(currentPlayerIndex + 1) % players.length]
      const logNextPlayer = document.createElement('p')
      lineBreak()
      logNextPlayer.innerHTML = `${nextPlayer.name} is the next player. Roll away ${nextPlayer.name}!`
      document.querySelector('.gamelog').appendChild(logNextPlayer)
      gameLog.scrollTop = gameLog.scrollHeight
    }
  }

  const passTurn = () => {
    if (dieRolled) {
      const logPass = document.createElement('p')
      logPass.innerHTML = `${currentPlayer.name} has chosen to pass their turn`
      document.querySelector('.gamelog').appendChild(logPass)
      setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length)
      lineBreak()


      // Logging the next player
      const nextPlayer = players[(currentPlayerIndex + 1) % players.length]
      const logNextPlayer = document.createElement('p')
      logNextPlayer.innerHTML = `${nextPlayer.name} is the next player. Let's Rock & ROLL!`
      document.querySelector('.gamelog').appendChild(logNextPlayer)
      gameLog.scrollTop = gameLog.scrollHeight
      setDieRolled(false)
    }

  }

  const lineBreak = () => {
    const container = document.createElement('div')
    container.style.textAlign = "center"

    const lineBreak = document.createElement('span')
    lineBreak.className = "material-symbols-outlined"
    lineBreak.style.color = "grey"
    lineBreak.style.fontSize = "1.2rem"
    lineBreak.innerHTML = `casino`.repeat(12)

    container.appendChild(lineBreak)
    document.querySelector('.gamelog').appendChild(container)
  }


  return (
    <div className="Game">
      <section className="modal">
        <section>
          {displayWinModal && <WinModal
            setWinModal={setWinModal}
            currentPlayer={currentPlayer} />}
        </section>
        <section>
          {displayHowToModal && <HowToModal
            setHowToModal={setHowToModal} />}
        </section>
      </section>

      <section className="game-board">
        <section className="player-boxes">
          <h1>PLAYER BOXES</h1>
          {players.map(player => (
            <div key={player.name}>
              <section className="player-box">

                <div className="left-side">
                  <div className="name-coins">
                    <h1>{`${player.name}`}</h1>
                    <h1 className={`${player.name}-coin`}>{player.coins}<span className='material-symbols-outlined'>monetization_on</span>
                    </h1>
                  </div>

                  <div className="establishments">
                    {player.establishments.map((card, index) => (
                      <div key={index}>
                        <div className={`${card.name} card`}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

            </div>
          ))}
        </section>

        <section className="communal-side">
          <img className="machi-logo" src={images.machiLogo} alt="machi koro logo" />
          <h1>CARD SHOP</h1>

          <div className="shop-section board-section">
            {cards.map(card => (
              <div className="card-parent" key={card.name}>
                <div className="card-slot">
                  <div
                    className={`${card.name} shop-card`}
                    onClick={() => selectToBuy(card)}>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="action-section board-section">
            <div
              className="single-die dice"
              onClick={() => rollDie()}>
            </div>
            <button
              className="buy-btn action-btn"
              onClick={() => buyCard()}>BUY
            </button>
            <button
              className="pass-btn action-btn"
              onClick={() => passTurn()}>PASS
            </button>
            <button
              className="question-btn"
              onClick={() => { setHowToModal(true) }}>?
            </button>
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

