import React from 'react'
import "./Modal.scss"

function StartModal({ setStartModal, setPlayerModal }) {

  const possiblePlayers = [2, 3, 4]

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
          {possiblePlayers.map(count => (
            <div key={count}>
              <div className="button-circles">
                <button
                  className={`a${count}-player player-btn`}
                  onClick={() => {
                    setPlayerModal(true)
                    setStartModal(false)
                  }}>
                </button>
              </div>
              <h3>{`${count}P`}</h3>
            </div>
          ))}

          {/* <div>
            <div className="button-circles">
              <button
                className="player-btn"
                onClick={() => {
                  setPlayerModal(true)
                  setStartModal(false)
                }}>
              </button>
            </div>
            <h3>2P</h3>
          </div>

          <div>
            <div className="button-circles">
              <button className="player-btn"
                onClick={() => {
                  setPlayerModal(true)
                  setStartModal(false)
                }}>
              </button>
            </div>
            <h3>3P</h3>
          </div>

          <div>
            <div className="button-circles">
              <button className="player-btn"
                onClick={() => {
                  setPlayerModal(true)
                  setStartModal(false)
                }}>
              </button>
            </div>
            <h3>4P</h3>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default StartModal