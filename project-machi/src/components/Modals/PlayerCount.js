import React from 'react'
import "./Modal.scss"

function PlayerModal({ setPlayerModal }) {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      setPlayerModal(false)
    }
  }

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
          <div className="input-names">
            <input type="text" />
            <input type="text" />
          </div>
          <button className="start-btn">
            START
          </button>

        </div>
      </div>
    </div>
  )

}

export default PlayerModal

