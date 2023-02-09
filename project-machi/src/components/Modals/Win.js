import React from 'react'
import "./Modal.scss"
import { useNavigate } from 'react-router-dom'



function WinModal({ setWinModal, currentPlayer }) {

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      setWinModal(false)
    }
  }

  const navigate = useNavigate()
  const returnHome = () => navigate('/')

  return (
    <div className='backdrop' onClick={handleBackdropClick}>
      <div className="modal-box">
        <div className="modal-close-btn">
          <button
            className='close-btn'
            onClick={() => setWinModal(false)}>X</button>
        </div>
        <div className="modal-title">
          <h1>The Winner is {currentPlayer.name}</h1>
        </div>

        <div className="end-message">
          <p>Thank you so much for playing! I hope everyone had fun playing the mini version of the board game that I love playing with my own friends. I highly recommend you buying the official physical version of the game and its expansions. Hope to see you again!</p>
          < button
            className="return-home-btn action-btn"
            onClick={returnHome}>
            RETURN HOME
          </button>
        </div>
      </div>
    </div>
  )
}

export default WinModal