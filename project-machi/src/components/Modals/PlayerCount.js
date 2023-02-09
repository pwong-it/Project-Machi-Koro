import React from 'react'
import "./Modal.scss"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function PlayerModal({ setPlayerModal, playerCount }) {
  const [playerNames, setPlayerNames] = useState([])

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      setPlayerModal(false)
    }
  }
  const navigate = useNavigate()
  const goToGame = () => {
    if (playerNames.every(name => name.trim().length === 0)) {
      alert(`Please remember to enter a name for all players!`)
      return
    } else {
      navigate('/game', { state: { playerNames } })
    }
  }

  const handlePlayerName = (event, index) => {
    const updatedNames = [...playerNames]
    updatedNames[index] = event.target.value
    setPlayerNames(updatedNames)
  }

  return (
    <div className='backdrop' onClick={handleBackdropClick}>
      <div className="modal-box">
        <div className="modal-close-btn">
          <button
            className='close-btn'
            onClick={() => setPlayerModal(false)}>X</button>
        </div>
        <div className="modal-title">
          <h1>Enter Player Names</h1>
        </div>
        <div className="modal-body">
          {[...Array(playerCount)].map((_, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder={`Enter Player ${[index + 1]} Name`}
                onChange={event => handlePlayerName(event, index)}
              />
            </div>
          ))}

          < button
            className="start-btn"
            onClick={goToGame}>
            START GAME
          </button>
        </div>
      </div>
    </div >
  )

}



export default PlayerModal