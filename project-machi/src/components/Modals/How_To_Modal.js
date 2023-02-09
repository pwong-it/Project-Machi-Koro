import React from 'react'
import "./Modal.scss"

function HowToModal({ setHowToModal }) {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      setHowToModal(false)
    }
  }

  return (
    <div className='backdrop' onClick={handleBackdropClick}>
      <div className="modal-box">
        <div className="modal-close-btn">
          <button
            className='close-btn'
            onClick={() => setHowToModal(false)}>X</button>
        </div>
        <div className="modal-title">
          <h1>How To Play</h1>
        </div>
        <div className="modal-body">
          <p>You’ve just been elected Mayor. Congratulations! Unfortunately, the
            citizens have some pretty big demands: jobs, a theme park, a couple of
            cheese factories, and maybe even a radio tower. A tough proposition
            since the city currently consists of a wheat field, a bakery, and a
            single die.</p>
          <p>Armed only with your trusty die and a dream, you must grow Machi Koro
            into the largest city in the region. You will need to collect income from
            developments, build public works, and steal from your neighbors’
            coffers. Just make sure they aren’t doing the same to you!</p>
          <p>Machi Koro is a fast-paced, lighthearted game for you
            and up to 3 friends. Once you’ve had a taste of Machi
            Koro, this infectiously fun game may have you
            wondering if the dinner table ever served another
            purpose other than gaming.</p>
          <p>For more detailed information from the official Machi Koro rulebook, please click <span><a href="https://www.fgbradleys.com/rules/rules2/MachiKoro-rules.pdf" target="_blank" rel="noreferrer">here.</a></span></p>
        </div>
      </div>
    </div>
  )
}

export default HowToModal