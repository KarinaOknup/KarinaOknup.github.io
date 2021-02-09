import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  return (
      <div>
        <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=889&q=80" alt="background-computer" className='back-img'/>
        <ProfileInfo />
        <MyPosts postsData={props.state.postsData} />
      </div>
  );
}

export default Profile;
