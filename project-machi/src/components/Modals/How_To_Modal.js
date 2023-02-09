import React from 'react'
import "./Modal.scss"
import { images } from '../../machi_images'

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
          <h2>About the Game</h2>
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
          <h1>How to Play</h1>
          <p>In this simplified version of Machi Koro, the aim is to buy all the Landmarks. These are the yellow cards as seen below:</p>
          <img className='card-how' src={images.trainStation} alt="Train station card as example" />
          <p>You are only required to buy one of each Landmark and the first person to do so, wins the game.</p>
          <p>In order to get more coins to buy these Landmarks, you have the option to buy Establishment cards. These help you get income as you play the game. See below for an explanation on the different type of cards: </p>
          <img className='diff-card' src={images.diffCards} alt="Explanation of different cards" />
          <p>Keep in mind, at this stage, only "Blue" cards are in play and there are no Landmark effects. See below to see an example of an Establishment card and how it's broken down:</p>
          <img className='est-card' src={images.estabCard} alt="Breakdown of an establishment card" />
          <h1>Card List</h1>
          <p>Here are the current cards in the game:</p>
          <div className="card-list">
            <img className='card-how' src={images.trainStation} alt="Train station card" />
            <img className='card-how' src={images.shoppingMall} alt="Shopping Mall card" />
            <img className='card-how' src={images.wheatField} alt="Wheatfield card" />
            <img className='card-how' src={images.ranch} alt="Ranch card" />
            <img className='card-how' src={images.apple} alt="Apple Orchard card" />
            <img className='card-how' src={images.flower} alt="Flower Orchard card" />
            <img className='card-how' src={images.forest} alt="Forest card" />
            <img className='card-how' src={images.mine} alt="Mine card" />
          </div>
          <p>For more detailed information from the official Machi Koro rulebook, please click <span><a href="https://www.fgbradleys.com/rules/rules2/MachiKoro-rules.pdf" target="_blank" rel="noreferrer">here.</a></span></p>
        </div>
      </div>
    </div>
  )
}

export default HowToModal