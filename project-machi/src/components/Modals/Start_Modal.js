import React from 'react'
import "./Modal.scss"

function StartModal({ setStartModal }) {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      setStartModal(false)
    }
  }

  return (
    <div className='backdrop' onClick={handleBackdropClick}>
      <div className="modal-box">
        <div className="modal-close-btn">
          <button onClick={() => setStartModal(false)}>X</button>
        </div>
        <div className="modal-title">
          <h1>How Many Players?</h1>
        </div>
        <div className="modal-body player-btns">
          <div>
            <div className="button-circles">
              <button className="2-player player-btn"></button>
            </div>
            <h3>2P</h3>
          </div>
          <div>
            <div className="button-circles">
              <button className="2-player player-btn"></button>
            </div>
            <h3>3P</h3>
          </div>
          <div>
            <div className="button-circles">
              <button className="2-player player-btn"></button>
            </div>
            <h3>4P</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartModal