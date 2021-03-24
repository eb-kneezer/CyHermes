import React from 'react'

import ninedots from '../assets/ninedots.png'
import notify from '../assets/notify.png'
import User from '../assets/User.jpg'

export default function ProfileBar() {
  return (
    <div className="profile">
      {/* <img src={ninedots} alt="menu"/> */}
      <div className="notify">
          <img src={notify} alt="notification"/>  
      </div>
      <span className="administrator">Administrator</span>
      <div className="user">
        <img src={User} alt="user"/>
      </div>
    </div>
  )
}
