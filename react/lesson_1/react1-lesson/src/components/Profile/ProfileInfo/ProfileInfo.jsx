import React from 'react';
import './ProfileInfo.css';

function ProfileInfo() {
  return (
  <div className="profile-info">
  <img src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="profile-photo" className='profile-photo'/>
  <div className="description">
    <span className="profile-name">Kitty</span>
    <ul>
      <li>date of birdth: 28.12.2018</li>
      <li>city: Minsk, Belarus</li>
      <li>education: Main Cats Meow University (MCMU)</li>
      <li>web site: kitty.com</li>
    </ul>
  </div>
  </div>
  );
}

export default ProfileInfo;
