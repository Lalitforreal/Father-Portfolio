import React from 'react'
import pic from '../assets/pic.jpg';
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-id'>{props.name}</p>
      <img id='user-img' src = {pic} alt="lalit" />
      <p id='user-desc' >{props.desc}</p>
    </div>
  )
}

export default UserCard
