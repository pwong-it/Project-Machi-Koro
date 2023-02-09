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
          <button onClick={() => setWinModal(false)}>X</button>
        </div>
        <div className="modal-title">
          <h1>The Winner is {currentPlayer.name}</h1>
        </div>

        <div className="modal-body end-message">
          <p>Thank you so much for playing! I hope everyone had fun playing the mini version of the board game that I love playing with my own friends.</p>
          <p>For those interested in what I'm doing these days my Github and Linkedin is below. Otherwise, return home for another game! </p>
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