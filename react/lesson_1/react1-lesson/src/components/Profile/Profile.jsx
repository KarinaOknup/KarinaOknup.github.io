import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import './Profile.css';

function Profile() {
  return (
      <div>
        <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=889&q=80" alt="background-computer" className='back-img'/>
        <div className="my-info">
          <img src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="my-photo" className='my-photo'/>
          <div className="text-info">
            <span className="my-name">Kitty</span>
            <ul>
              <li>data of birdth</li>
              <li>city</li>
              <li>education</li>
              <li>web site</li>
            </ul>
          </div>
        </div>
        <MyPosts />
      </div>
  );
}

export default Profile;
