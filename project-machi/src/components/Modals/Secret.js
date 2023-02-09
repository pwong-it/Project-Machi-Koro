import React from 'react'
import "./Modal.scss"
import { images } from '../../machi_images'


function SecretModal({ setSecretModal }) {

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      setSecretModal(false)
    }
  }

  return (
    <div className='backdrop' onClick={handleBackdropClick}>
      <div className="modal-box">
        <div className="modal-close-btn">
          <button
            className='close-btn'
            onClick={() => setSecretModal(false)}>X</button>
        </div>
        <div className="modal-title">
          <h1>Oh hey!</h1>
        </div>
        <div className="secret-modal">
          <p>Leaving Machi City so soon? I'm up for an adventure too, and I'm happy to drive. Where shall we go? </p>
          <img className='sign4 sign' src={images.sign4} alt="" />

          <a href="https://www.linkedin.com/in/phil-wong/" target="_blank" rel="noreferrer"><img className='sign3 sign' src={images.sign3} alt="My linkedin" /></a>

          <a href="https://github.com/pwong-it" target="_blank" rel="noreferrer"><img className='sign2 sign' src={images.sign2} alt="My Github" /></a>

          <img className='sign1 sign' src={images.sign1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SecretModal 