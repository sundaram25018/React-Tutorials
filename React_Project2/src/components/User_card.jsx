import React from 'react'
import nature from '../assets/nature.jpg'
import './User_card.css'
function User_card() {
  return (
    <div className='user-container'>
      <p id='title'>Sundaram Dubey</p>
      <img id='image' src={nature} alt="" ></img>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam et quisquam dolor facer</p>
    </div>
  )
}

export default User_card
