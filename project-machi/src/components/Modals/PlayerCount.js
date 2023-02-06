import React from 'react'
import "./Modal.scss"
import { useNavigate } from 'react-router-dom'

function PlayerModal({ setPlayerModal, playerCount }) {

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      setPlayerModal(false)
    }
  }
  const navigate = useNavigate()
  const goToGame = () => navigate('/game')

  return (
    <div className='backdrop' onClick={handleBackdropClick}>
      <div className="modal-box">
        <div className="modal-close-btn">
          <button onClick={() => setPlayerModal(false)}>X</button>
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
                required
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

